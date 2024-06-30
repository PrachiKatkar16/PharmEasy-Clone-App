import React from 'react'
import Search from './Search'
import Firstpart from './Firstpart'

function SearchFirstPartCombo() {
  return (
    <div style={{backgroundColor:"radial-gradient(150px 150px at 95% 0%, rgba(253, 186, 43, 0.3) 0%, rgba(253, 186, 43, 0) 100%), radial-gradient(150px 150px at 5% 0%, rgba(120, 213, 242, 0.3) 0%, rgba(253, 186, 43, 0) 100%);"}}>
        <Search/>
        <Firstpart/>
    </div>
  )
}

export default SearchFirstPartCombo