import React from 'react';

function NewsAddForm() {
  return (
    <form className='border shadow-lg p-4 rounded'>
      <div className='mb-3'>
        <label htmlFor="name" className='form-label fs-4'>Name for new news</label>
        <input
          type="text"
          required name='name'
          className='form-control'
          id='name'
          placeholder='What is the of news?'
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
        />
      </div>

      <div className='mb-3'>
        <label style={{"color": "red"}} htmlFor="category" className='form-label'><b>Choose category of news</b></label>
        <select required className='form-select' name="category" id="category">
          <option>Choose news category...</option>
          <option value="breaking">Breaking news</option>
          <option value="sport">Sport news</option>
          <option value="world">World news</option>
        </select>
      </div>
      <button type="submit" className=' w-100 btn btn-dark shadow-lg text-light'>
        Create news
      </button>
    </form>
  )
}

export default NewsAddForm;
