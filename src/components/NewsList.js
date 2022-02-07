import React, { useEffect, useCallback } from 'react';
import { useHttp } from '../hook/useHttp'
import { useSelector, useDispatch } from "react-redux"
import { newsFetching, newsFetched, newsFetchingError, newsDeleted } from '../redux/actions'
import Spinner from './Spinner';
import Error from './Error';
import NewsListItem from './NewsListItem';
import {CSSTransition, TransitionGroup}from 'react-transition-group'
import {createSelector}from 'reselect'
import './styles/news_list.css'

function NewsList() {
  const filteredNewsSelected = createSelector(
    (state) => state.filter.activeFilter,
    (state) => state.news.news,
    (filter, news) => {
      if (filter === 'all') {
        return news
      } else {
        return news.filter(s => s.category === filter)
      }
    }
  )
  const filteredNews = useSelector(filteredNewsSelected)
  const filterLoadingStatus  = useSelector(state => state.filterLoadingStatus)
  const dispatch = useDispatch()

  const { request } = useHttp()

  useEffect(() => {
    dispatch(newsFetching())
    request("http://localhost:3001/news")
      .then(data => dispatch(newsFetched(data)))
      .catch(() => dispatch(newsFetchingError()))
  }, [])

  const onDelete = useCallback((id) => {
    request(`http://localhost:3001/news/${id}`, "DELETE")
      .then(data => console.log(data + 'deleted'))
      .then(dispatch(newsDeleted(id)))
      .catch(err => console.log(err))
  }, [])

  if (filterLoadingStatus === 'loading') {
    return <Spinner />
  } else if (filterLoadingStatus === 'error') {
    return <Error />
  }

  const renderNewsList = (arr) => {
    if (arr.length === 0) {
      return (
        <CSSTransition timeout={500} classNames='item'>
          <h5 className='text-center mt-5'>News don't found</h5>
        </CSSTransition>
      )
    }
    return arr.map(({ id, ...props }) => {
      return (
        <CSSTransition key={id} timeout={500} classNames='item'>
          <NewsListItem onDelete={() => onDelete(id)} {...props} />
        </CSSTransition>
      )
    }).reverse()
  }

  const element = renderNewsList(filteredNews)

  return (
    <TransitionGroup component='ul'>
      {element}
    </TransitionGroup>
  )
}

export default NewsList;