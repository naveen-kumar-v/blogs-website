import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Pagination = () => {

  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className='d-flex justify-content-between align-items-baseline position-fixed position-relative bottom-0 bg-light w-75 p-2 px-3 border-top border-dark border-2 mt-2'>
      <div className='d-flex gap-2'>
        {
          page > 1 &&
          (
            <button onClick={() => handlePageChange(page - 1)}
              className='btn btn-outline-dark fw-bold'
            >
              Previous
            </button>
          )
        }

        {
          page < totalPages &&
          (
            <button onClick={() => handlePageChange(page + 1)}
              className='btn btn-outline-dark fw-bold'
            >
              Next
            </button>
          )
        }
      </div>

      <p className='fw-bold'>Page {page} of {totalPages}</p>
    </div>
  )
}
