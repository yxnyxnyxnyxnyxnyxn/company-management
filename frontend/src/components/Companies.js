import React from 'react'
import Company from "./Company.js"

function Companies({companies,deleteCompany,editCompany}){
  return (
      companies.map(company =>(
        <li
            key={company}
            className="list-group-item d-flex justify-content-between align-items-center"
        >
        <Company company={company} deleteCompany={deleteCompany} editCompany={editCompany}/>
        </li>
      ))

  )
}
export default Companies
