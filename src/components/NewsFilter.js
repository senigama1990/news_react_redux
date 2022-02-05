import React from 'react';

function NewsFilter() {
  return (
    <div className='card shadow-lg mt-4'>
      <div className="card-body">
        <p className="card-text">Filter by category</p>
        <div className="btn-group">
          <button className='btn btn-outline-dark active'>All</button>
          <button className='btn btn-danger'>Breaking news</button>
          <button className='btn btn-primary'>Sport news</button>
          <button className='btn btn-success'>World news</button>
        </div>
      </div>
    </div>
  )
}

export default NewsFilter;
