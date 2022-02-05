import React, { useEffect } from 'react';
import { useHttp } from '../hook/useHttp'
import { useSelector, useDispatch } from "react-redux"
import { newsFetching, newsFetched, newsFetchingError } from '../redux/actions'
import Spinner from './Spinner';
import Error from './Error';
import NewsListItem from './NewsListItem';


function NewsList() {

  const { filteredNews, filterLoadingStatus } = useSelector(state => state)
  const dispatch = useDispatch()

  const { request } = useHttp()

  useEffect(() => {
    dispatch(newsFetching())
    request("http://localhost:3001/news")
      .then(data => dispatch(newsFetched(data)))
      .catch(() => dispatch(newsFetchingError()))
  }, [])

  if (filterLoadingStatus === 'loading') {
    return <Spinner />
  } else if (filterLoadingStatus === 'error') {
    return <Error />
  }

  const renderNewsList = (arr) => {
    if (arr.length === 0) {
      return <h4 className='text-center mt-5'>News doesn't exsists</h4>
    }
    return arr.map(({ id, ...props }) => {
      return <NewsListItem key={id} {...props} />
    })
  }

  const element = renderNewsList(filteredNews)

  return (
    <ul>{element}</ul>
  )
}

export default NewsList;