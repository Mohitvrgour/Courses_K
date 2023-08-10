import React from 'react'
import { useState } from 'react'
import './style.css'
import Coursedata from './CourseData'
import Cards from './Cards'


const Search = () => {

    const [coursedata, setCdata] = useState(Coursedata);
    //console.log(cdeta);

  return (
    <>
      <section className='iteam_section mt-1 container'>
        <h2  className='dev'>Courses Live Now</h2>
        <div className='row d-flex justify-content-around align-items-center' style={{position:'relative', top:'4px', left:'-24px'}}>
          <Cards data={coursedata}/>
        </div>
      </section>
    </>
    )
}

export default Search