import React,{useState} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';

function S350() {
  const [width,setwidth] = useState('')
  const [height,setheight] = useState('')
  const [shutterwidth2,setshutterwidth2] = useState('')
  const [shutterheight2,setshutterheight2] = useState('')
  const [interlockheight2,setinterlockheight2] = useState('')
  const [glasswidth2,setglasswidth2] = useState('')
  const [glassheight2,setglassheight2] = useState('')

  const handlecalculate2 =(e)=>{
      setshutterwidth2(((width-14)/2).toFixed(2))
      setshutterheight2(height-82)
      setinterlockheight2(height-82)
      setglasswidth2 ((((width-14)/2)-122).toFixed(2))
      setglassheight2 ((height-82)-122)
  }

  const [shutterwidth3,setshutterwidth3] = useState('')
  const [shutterheight3,setshutterheight3] = useState('')
  const [interlockheight3,setinterlockheight3] = useState('')
  const [glasswidth3,setglasswidth3] = useState('')
  const [glassheight3,setglassheight3] = useState('')

  const handlecalculate3=(e)=>{
      setshutterwidth3(((parseInt(width)+51)/3).toFixed(2))
      setshutterheight3(height-82)
      setinterlockheight3(height-82)
      setglasswidth3((((parseInt(width)+51)/3)-122).toFixed(2))
      setglassheight3((height-82)-122)
  }

  const [shutterwidth4,setshutterwidth4] = useState('')
  const [shutterheight4,setshutterheight4] = useState('')
  const [interlockheight4,setinterlockheight4] = useState('')
  const [matingsection4,setmatingsection4] = useState('')
  const [glasswidth4,setglasswidth4] = useState('')
  const [glassheight4,setglassheight4] = useState('')

  const handlecalculate4=(e)=>{
      setshutterwidth4(((parseInt(width)+44)/4).toFixed(2))
      setshutterheight4(height-82)
      setinterlockheight4(height-82)
      setmatingsection4(height-109)
      setglasswidth4((((parseInt(width)+44)/4)-122).toFixed(2))
      setglassheight4((height-82)-122)
  }

  const [shutterwidth6,setshutterwidth6] = useState('')
  const [shutterheight6,setshutterheight6] = useState('')
  const [interlockheight6,setinterlockheight6] = useState('')
  const [matingsection6,setmatingsection6] = useState('')
  const [glasswidth6,setglasswidth6] = useState('')
  const [glassheight6,setglassheight6] = useState('')

  const handlecalculate6=(e)=>{
      setshutterwidth6(((parseInt(width)+175)/6).toFixed(2))
      setshutterheight6(height-82)
      setinterlockheight6(height-82)
      setmatingsection6(height-109)
      setglasswidth6((((parseInt(width)+175)/6)-122).toFixed(2))
      setglassheight6((height-82)-122)
  }
  let display2 = shutterwidth2?'block':'d-none'
  let display3 = shutterwidth3?'block':'d-none'
  let display4 = shutterwidth4?'block':'d-none'
  let display6 = shutterwidth6?'block':'d-none'
  return (
    <div className='main-230'>
    <Tabs className='mb-3' style={{fontWeight:'bolder',borderBottom:'1px solid blue'}}
    defaultActiveKey="home"
    id="justify-tab-example"
    fill
  >
    <Tab eventKey="home" title="2 TRACK 2 SHUTTER" className=''>
    <div className='main'>
      <div className='box'>
          <div className='inner-box'>
              <div className='forms-wrap'>
                  <form autoComplete='off' className='sign-in-form'>
                      <div className='actual-form'>
                          <div className='input-wrap'>
                              <input type='text' className='input-field' autoComplete='off' onChange={(e)=>setwidth(e.target.value)} />
                              <label>Width</label>
                          </div>
                          <div className='input-wrap'>
                          <input type='text' className='input-field' autoComplete='off' onChange={(e)=>setheight(e.target.value)}  />
                              <label>Height</label>
                          </div>
                          <Button onClick={(e)=>handlecalculate2(e)} className='sign-btn'>Calculate</Button>
                      </div>
                  </form>
              </div>
              <div className='carousel'>
             
                  <Table  className='table-text' style={{borderCollapse:'separate',borderSpacing:'70px 22px',fontWeight:'bolder'}} >
                  <tr>
                      <th></th>
                      <th></th>
                      <th>Pcs</th>
                  </tr>
                  <tr>
                      <td>Shutter Width</td>
                      <td>{shutterwidth2}</td>
                      <td>4</td>
                  </tr>
                  <tr>
                      <td>Shutter Height</td>
                      <td>{shutterheight2}</td>
                      <td>4</td>
                  </tr>
                  <tr>
                      <td>Interlock Height</td>
                      <td>{interlockheight2}</td>
                      <td>2</td>
                  </tr>
                  <tr>
                      <td>Glass Width</td>
                      <td>{glasswidth2}</td>
                      <td>2</td>
                  </tr>
                  <tr>
                      <td>Glass Height</td>
                      <td>{glassheight2}</td>
                  </tr>
                  </Table>
              </div>
          </div>
      </div>
  </div>
    </Tab>
    <Tab eventKey="profile" title="3 TRACK 3 SHUTTER">
    <div className='main'>
      <div className='box'>
          <div className='inner-box'>
              <div className='forms-wrap'>
                  <form autoComplete='off' className='sign-in-form'>
                      <div className='actual-form'>
                          <div className='input-wrap'>
                              <input type='text' className='input-field' autoComplete='off' onChange={(e)=>setwidth(e.target.value)} />
                              <label>Width</label>
                          </div>
                          <div className='input-wrap'>
                          <input type='text' className='input-field' autoComplete='off' onChange={(e)=>setheight(e.target.value)}  />
                              <label>Height</label>
                          </div>
                          <Button onClick={(e)=>handlecalculate3(e)} className='sign-btn'>Calculate</Button>
                      </div>
                  </form>
              </div>
              <div className='carousel'>
             
                  <Table  className='table-text' style={{borderCollapse:'separate',borderSpacing:'70px 22px',fontWeight:'bolder'}} >
                  <tr>
                      <th></th>
                      <th></th>
                      <th>Pcs</th>
                  </tr>
                  <tr>
                      <td>Shutter Width</td>
                      <td>{shutterwidth3}</td>
                      <td>6</td>
                  </tr>
                  <tr>
                      <td>Shutter Height</td>
                      <td>{shutterheight3}</td>
                      <td>6</td>
                  </tr>
                  <tr>
                      <td>Interlock Height</td>
                      <td>{interlockheight3}</td>
                      <td>4</td>
                  </tr>
                  <tr>
                      <td>Glass Width</td>
                      <td>{glasswidth3}</td>
                      <td>3</td>
                  </tr>
                  <tr>
                      <td>Glass Height</td>
                      <td>{glassheight3}</td>
                  </tr>
                  </Table>
              </div>
          </div>
      </div>
  </div>
    </Tab>
    <Tab eventKey="longer-tab" title="2 TRACK 4 SHUTTER">
    <div className='main'>
      <div className='box'>
          <div className='inner-box'>
              <div className='forms-wrap'>
                  <form autoComplete='off' className='sign-in-form'>
                      <div className='actual-form'>
                          <div className='input-wrap'>
                              <input type='text' className='input-field' autoComplete='off' onChange={(e)=>setwidth(e.target.value)} />
                              <label>Width</label>
                          </div>
                          <div className='input-wrap'>
                          <input type='text' className='input-field' autoComplete='off' onChange={(e)=>setheight(e.target.value)}  />
                              <label>Height</label>
                          </div>
                          <Button onClick={(e)=>handlecalculate4(e)} className='sign-btn'>Calculate</Button>
                      </div>
                  </form>
              </div>
              <div className='carousel'>
             
                  <Table  className='table-text' style={{borderCollapse:'separate',borderSpacing:'70px 22px',fontWeight:'bolder'}} >
                  <tr>
                      <th></th>
                      <th></th>
                      <th>Pcs</th>
                  </tr>
                  <tr>
                      <td>Shutter Width</td>
                      <td>{shutterwidth4}</td>
                      <td>8</td>
                  </tr>
                  <tr>
                      <td>Shutter Height</td>
                      <td>{shutterheight4}</td>
                      <td>8</td>
                  </tr>
                  <tr>
                      <td>Interlock Height</td>
                      <td>{interlockheight4}</td>
                      <td>4</td>
                  </tr>
                  <tr>
                      <td>Mating Section</td>
                      <td>{matingsection4}</td>
                      <td>1</td>
                  </tr>
                  <tr>
                      <td>Glass Width</td>
                      <td>{glasswidth4}</td>
                      <td>4</td>
                  </tr>
                  <tr>
                      <td>Glass Height</td>
                      <td>{glassheight4}</td>
                  </tr>
                  </Table>
              </div>
          </div>
      </div>
  </div>
    </Tab>
    <Tab eventKey="contact" title="3 TRACK 6 SHUTTER">
    <div className='main'>
      <div className='box'>
          <div className='inner-box'>
              <div className='forms-wrap'>
                  <form autoComplete='off' className='sign-in-form'>
                      <div className='actual-form'>
                          <div className='input-wrap'>
                              <input type='text' className='input-field' autoComplete='off' onChange={(e)=>setwidth(e.target.value)} />
                              <label>Width</label>
                          </div>
                          <div className='input-wrap'>
                          <input type='text' className='input-field' autoComplete='off' onChange={(e)=>setheight(e.target.value)}  />
                              <label>Height</label>
                          </div>
                          <Button onClick={(e)=>handlecalculate6(e)} className='sign-btn'>Calculate</Button>
                      </div>
                  </form>
              </div>
              <div className='carousel'>
             
                  <Table  className='table-text' style={{borderCollapse:'separate',borderSpacing:'70px 22px',fontWeight:'bolder'}} >
                  <tr>
                      <th></th>
                      <th></th>
                      <th>Pcs</th>
                  </tr>
                  <tr>
                      <td>Shutter Width</td>
                      <td>{shutterwidth6}</td>
                      <td>12</td>
                  </tr>
                  <tr>
                      <td>Shutter Height</td>
                      <td>{shutterheight6}</td>
                      <td>12</td>
                  </tr>
                  <tr>
                      <td>Interlock Height</td>
                      <td>{interlockheight6}</td>
                      <td>8</td>
                  </tr>
                  <tr>
                      <td>Mating Section</td>
                      <td>{matingsection6}</td>
                      <td>1</td>
                  </tr>
                  <tr>
                      <td>Glass Width</td>
                      <td>{glasswidth6}</td>
                      <td>6</td>
                  </tr>
                  <tr>
                      <td>Glass Height</td>
                      <td>{glassheight6}</td>
                  </tr>
                  </Table>
              </div>
          </div>
      </div>
  </div>
    </Tab>
  </Tabs>
  </div>
  )
}

export default S350