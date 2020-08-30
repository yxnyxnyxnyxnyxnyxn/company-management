import React from 'react'


function Company({company}){
  return (
    <>
        <span>
          {company.name}
        </span>

        <span>
              <button
                className="btn btn-secondary mr-2"
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
              >
                Delete
              </button>
       </span>
    </>
  )
}
export default Company
