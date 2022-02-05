import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHttp } from '../hook/useHttp'
import { v4 } from 'uuid'
import {newsCreated}from '../redux/actions'

function NewsAddForm() {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  const { filters, filterLoadingStatus } = useSelector(state => state)

  const dispatch = useDispatch()
  const { request } = useHttp()
  
  function onSubmitHandler(e) {
    e.preventDefault()
    const newNews = { id: v4(), name, description, category }
    request('http://localhost:3001/news', 'POST', JSON.stringify(newNews))
      .then(res => console.log("Success"))
      .then(dispatch(newsCreated(newNews)))
      .catch(err => console.log(err))
    
    setName('')
    setDescription('')
    setCategory('')
  }

  const renderFilters = (filters, status) => {
    if (status === 'loading') {
      return <option>loading options</option>
    } else if (status === 'error') {
      <option>Error options</option>
    }

    if (filters && filters.length > 0) {
      return filters.map(({name, label}) => {
        if (name === 'all') return
        return <option key={name} value={name}>{ label}</option>
      })
    }
  }


  return (
    <form className='border shadow-lg p-4 rounded' onSubmit={onSubmitHandler}>
      <div className='mb-3'>
        <label htmlFor="name" className='form-label fs-4'>Name for new news</label>
        <input
          type="text"
          required name='name'
          className='form-control'
          id='name'
          placeholder='What is the of news?'
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
      </div>

      <div className='mb-3'>
        <label htmlFor="text" className='form-label fs-4'>Description</label>
        <textarea
          type="text"
          required
          name='text'
          className='form-control'
          id='text'
          placeholder='What is your news about?'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className='mb-3'>
        <label style={{"color": "red"}} htmlFor="category" className='form-label'><b>Choose category of news</b></label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} required className='form-select' name="category" id="category">
          <option>Choose news category...</option>
          {renderFilters(filters, filterLoadingStatus)}
        </select>
      </div>
      <button type="submit" className=' w-100 btn btn-dark shadow-lg text-light'>
        Create news
      </button>
    </form>
  )
}

export default NewsAddForm;
