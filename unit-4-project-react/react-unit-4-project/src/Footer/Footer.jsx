import React from 'react'
import {Link} from "react-router-dom";
import "./Footer.css"

function Footer() {
  return (
    <div
    style={{
      width:'1200px',
      margin:'auto',
      
    }} 
    
    >
    <table>
            <thead style={{
                  display:'grid',
                  gridTemplateColumns:'repeat(5,1fr)',

                 
            }} 
            >
                        <th>Popular Templates</th>
                        <th>Popular Extensions</th>
                        <th>Popular Solutions</th>
                        <th>Learn More</th>
                        <th>Company</th>
            </thead>
            <tbody style={{
                  display:'grid',
                  gridTemplateColumns:'repeat(5,1fr)',
                 
                 
            }}>
                        <tr><Link className='linking' to=''>Content Calendar</Link></tr>
                        <tr><Link className='linking' to=''>Miro </Link></tr>
                        <tr><Link className='linking' to=''>Marketing </Link></tr>
                        <tr><Link className='linking' to=''>Community </Link></tr>
                        <tr><Link className='linking' to=''>About </Link></tr>
                        <tr><Link className='linking' to=''>Product Roadmap </Link></tr>
                        <tr><Link className='linking' to=''>Jira </Link></tr>
                        <tr><Link className='linking' to=''>Product Operations </Link></tr>
                        <tr><Link className='linking' to=''>Support </Link></tr>
                        <tr><Link className='linking' to=''>Careers POPULAR </Link></tr>
                        <tr><Link className='linking' to=''>Inventory Tracking </Link></tr>
                        <tr><Link className='linking' to=''>Clearbit </Link></tr>
                        <tr><Link className='linking' to=''>Human Resources </Link></tr>
                        <tr><Link className='linking' to=''>Articles NEW </Link></tr>
                        <tr><Link className='linking' to=''>Blog </Link></tr>
                        <tr><Link className='linking' to=''>Marketing Campaign Planner </Link></tr>
                        <tr><Link className='linking' to=''>Loom </Link></tr>
                        <tr><Link className='linking' to=''>Sales </Link></tr>
                        <tr><Link className='linking' to=''>Guides NEW </Link></tr>
                        <tr><Link className='linking' to=''>Status </Link></tr>
                        <tr><Link className='linking' to=''>Event Planning </Link></tr>
                        <tr><Link className='linking' to=''>Formstack </Link></tr>
                        <tr><Link className='linking' to=''>Operations </Link></tr>
                        <tr><Link className='linking' to=''>Customer Stories NEW </Link></tr>
                        <tr><Link className='linking' to=''>Newsroom </Link></tr>
                        <tr><Link className='linking' to=''>Show more </Link></tr>
                        <tr><Link className='linking' to=''>Show more </Link></tr>
                        <tr><Link className='linking' to=''>Show more </Link></tr>
                        

            </tbody>
    </table>





    </div>
  )
}

export default Footer