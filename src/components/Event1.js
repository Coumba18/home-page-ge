import React, { Component } from 'react'
import Google from "../images/Google.png";
import AlarmOffIcon from '@mui/icons-material/AlarmOff';
import Rectangle42 from "../images/Rectangle42.png";
import Rectangle422 from "../images/Rectangle422.png";
import Rectangle421 from "../images/Rectangle421.png";
import Rectangle420 from "../images/Rectangle420.png";

export class Event1 extends Component {
  render() {
    return (
      <div className='container event1'>
        <h4 className='ms-2'>Evénements carrière à ne pas manquer</h4>
        <div id="carouselExampleSlidesOnly" className="carousel slide mt-5 shadow" data-bs-ride="carousel">
        <div className="carousel-inner">
         <div className="carousel-item active">
          <div className='row'>
            <div className='col-md-6 col-sm-12 col-xs-12 ps-4'>
              <p className='p-event1 text-muted'>DU JEUDI  22 SEPTEMBRE 2022 Ä 10:00 AU SAMEDI 22 OCTOBRE 2022 Ä 18:00</p>
              <p className='p-event1'>Google warsaw - Women in tech mentoring program</p>
              <p className='p-event1'>En ligne</p>
              <p className='text-small ps-3'><img src={Google} alt="" className='img-event1'/>Google</p>
              <p className='p-alarm text-muted ps-3'><AlarmOffIcon className='alarm'/>Inscription close</p>
            </div>
            <div className='col-md-6 col-sm-12 col-xs-12'>
              <img src={Rectangle42} alt="" className='tof-event1 d-block w-100'/>
            </div>
          </div> 
         </div>
         <div className="carousel-item">
            <div className='row'>
              <div className='col-md-6 col-sm-12 col-xs-12 ps-4'>
                <p className='p-event1 text-muted'>DU JEUDI  22 SEPTEMBRE 2022 Ä 10:00 AU SAMEDI 22 OCTOBRE 2022 Ä 18:00</p>
                <p className='p-event1'>Google warsaw - Women in tech mentoring program</p>
                <p className='p-event1'>En ligne</p>
                <p className='text-small ps-3'><img src={Google} alt="" className='img-event1'/>Google</p>
                <p className='p-alarm text-muted ps-3'><AlarmOffIcon className='alarm'/>Inscription close</p>
              </div>
              <div className='col-md-6 col-sm-12 col-xs-12'>
                <img src={Rectangle422} alt="" className='tof-event1 d-block w-100'/>
              </div>
           </div>   
         </div>
         <div className="carousel-item">
            <div className='row'>
              <div className='col-md-6 col-sm-12 col-xs-12 ps-4'>
                <p className='p-event1 text-muted'>DU JEUDI  22 SEPTEMBRE 2022 Ä 10:00 AU SAMEDI 22 OCTOBRE 2022 Ä 18:00</p>
                <p className='p-event1'>Google warsaw - Women in tech mentoring program</p>
                <p className='p-event1'>En ligne</p>
                <p className='text-small ps-3'><img src={Google} alt="" className='img-event1'/>Google</p>
                <p className='p-alarm text-muted ps-3'><AlarmOffIcon className='alarm'/>Inscription close</p>
             </div>
             <div className='col-md-6 col-sm-12 col-xs-12'>
                <img src={Rectangle421} alt="" className='tof-event1 d-block w-100'/>
              </div>
           </div>
         </div>
         <div className="carousel-item">
            <div className='row'>
              <div className='col-md-6 col-sm-12 col-xs-12 ps-4'>
                <p className='p-event1 text-muted'>DU JEUDI  22 SEPTEMBRE 2022 Ä 10:00 AU SAMEDI 22 OCTOBRE 2022 Ä 18:00</p>
                <p className='p-event1'>Google warsaw - Women in tech mentoring program</p>
                <p className='p-event1'>En ligne</p>
                <p className='text-small ps-3'><img src={Google} alt="" className='img-event1'/>Google</p>
                <p className='p-alarm text-muted ps-3'><AlarmOffIcon className='alarm'/>Inscription close</p>
             </div>
             <div className='col-md-6 col-sm-12 col-xs-12'>
                <img src={Rectangle420} alt="" className='tof-event1 d-block w-100'/>
              </div>
           </div>
         </div>
       </div>
       
</div>
</div>
      
               
    )
  }
}

export default Event1