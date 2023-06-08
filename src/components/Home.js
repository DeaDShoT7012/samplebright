import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


function Home() {
  return (
    // <div  id='main'>
    //     <div id='main_series'>
    //         <p className='series_text' ><b>PLEASE SELECT THE SERIES YOU WANT</b></p>
            // <div>
            //     <Link to={'/230'}><Button variant="outline-dark" type='button' className='butn'><b>230</b></Button></Link>
            //     <Link to={'/280'}><Button variant="outline-dark" className='butn'><b>280</b></Button></Link>
            //     <Link to={'/350'}><Button variant="outline-dark" className='butn'><b>350</b></Button></Link>
            // </div>
    //     </div>        
    // </div>
    <div>
      <div className='row'>
        <div className='col-6'>
        <img className='main-img' src='https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?w=1060&t=st=1686051102~exp=1686051702~hmac=9878a5ac98e14637559ed3fb40f3b554c236d67ab4dfcbc8db77fed54cc80444'/>
        {/* <img src='https://img.freepik.com/free-vector/flat-engineering-construction-illustrated_23-2148892788.jpg?w=1480&t=st=1686119866~exp=1686120466~hmac=d0de3e2ba6d218f1dfea4df7040e79f559e5a41fb7fa555fb08c335f7d07e1a4'/> */}
        </div>
        <div className='col-6' id='main-text'>
        <div>
        <h2 className='series_text' ><b><span className='text-warning'>PLEASE SEL</span><span className='text-success'>ECT THE SERI</span><span className='text-danger'>ES YOU WANT</span></b></h2>
        </div>
        <div>
            <Link to={'/230'}><Button variant="outline-warning" className='butn'><b>230</b></Button></Link>
            <Link to={'/280'}><Button variant="outline-success" className='butn'><b>280</b></Button></Link>
            <Link to={'/350'}><Button variant="outline-danger" className='butn'><b>350</b></Button></Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home