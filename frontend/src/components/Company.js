import React from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap';

function Company({company,deleteCompany,editCompany}){

  return (
    <>
        <span>
          {company.name}
        </span>

        <span>
              <button
                className="btn btn-secondary mr-2"
                onClick={() => editCompany(company)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteCompany(company)}
              >
                Delete
              </button>
       </span>
    </>
  )
}
export default Company
