import React from 'react';
import { BiSearchAlt } from "react-icons/bi";

export const Search = ({ handleSearch }) => {

  return (
    <div className='content-search'>
        <div className='search'>
            <BiSearchAlt className='search-icon' />
            <input 
							className='input-search' 
							type="text" 
							placeholder='Search...' 
							onChange={(event) => handleSearch(event.target.value)} 
						/>
        </div>
    </div>
  )
}
