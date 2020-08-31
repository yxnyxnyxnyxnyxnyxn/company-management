import React from 'react'
function Search({handleInput,search}){
  return (
    <section className="searchbox-wrap">
      <input type="test"
        placeholder="Search for a company..."
        className="searchbox"
        onChange={handleInput}
      />
    </section>
  )
}
export default Search
