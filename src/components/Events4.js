import React, { Component } from 'react'
import Rectangle60 from "../images/Rectangle60.png";
import Rectangle63 from "../images/Rectangle63.png";
import Rectangle66 from "../images/Rectangle66.png";
import image9 from "../images/image9.png";
import PeopleIcon from '@mui/icons-material/People';

export class Events4 extends Component {
  render() {
    return (
        <div className='a-event event4 py-5'>
            <div className='row'>
        <div className='col-md-4 col-sm-12 col-xs-12'>
        <div className="card border-0 shadow m-4">
            <img src={Rectangle60} className="card-img-top" alt="..."/>
            <div className="card-body m-3">
               <h6 className="card-title text-muted">LE JEUDI 13 OCTOBRE 2022 DE 10:00 A 10:45</h6>
               <p className="card-text">Dealing witch sollers</p>
               <p className="card-text"><small className="text-muted">En ligne</small></p>
               <p className='card-text'><img src={image9} alt=" petit"/><span className='ms-3'>Sollers consulting</span></p>
               <p className='text-muted mt-5'><PeopleIcon/>56 étudiant sont intressée</p>
            </div>
        </div>
        </div>
        <div className='col-md-4 col-sm-12 col-xs-12'>
        <div className="card border-0 shadow m-4">
            <img src={Rectangle63} className="card-img-top" alt="..."/>
            <div className="card-body m-3">
               <h6 className="card-title text-muted">LE JEUDI 13 OCTOBRE 2022 DE 10:00 A 10:45</h6>
               <p className="card-text">Dealing witch sollers</p>
               <p className="card-text"><small className="text-muted">En ligne</small></p>
               <p className='card-text'><img src={image9} alt=" petit"/><span className='ms-3'>Sollers consulting</span></p>
               <p className='text-muted mt-5'><PeopleIcon/>56 étudiant sont intressée</p>
            </div>
        </div>
        </div>
        <div className='col-md-4 col-sm-12 col-xs-12'>
        <div className="card border-0 shadow m-4">
            <img src={Rectangle66} className="card-img-top" alt="..."/>
            <div className="card-body m-3">
               <h6 className="card-title text-muted">LE JEUDI 13 OCTOBRE 2022 DE 10:00 A 10:45</h6>
               <p className="card-text">Dealing witch sollers</p>
               <p className="card-text"><small className="text-muted">En ligne</small></p>
               <p className='card-text'><img src={image9} alt=" petit"/><span className='ms-3'>Sollers consulting</span></p>
               <p className='text-muted mt-5'><PeopleIcon/>56 étudiant sont intressée</p>
            </div>
        </div>
        </div>
        <a href='#' >Voir les 7 événements</a>
      </div>

    </div>
      
    )
  }
}

export default Events4