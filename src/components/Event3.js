import React, { Component } from 'react'
import Rectangle55 from "../images/Rectangle55.png";
import Rectangle56 from "../images/Rectangle56.png";
import Rectangle57 from "../images/Rectangle57.png";
import image9 from "../images/image9.png";
import PeopleIcon from '@mui/icons-material/People';
import CachedIcon from '@mui/icons-material/Cached';

export class Event3 extends Component {
  render() {
    return (
        <div className='event4 py-5'>
          <h4 >Rencontres professionnelles et recrutement</h4>
            <div className='row py-5'>
        <div className='col-md-4 col-sm-12 col-xs-12'>
        <div className="card border-0 shadow m-4">
            <img src={Rectangle55} className="card-img-top" alt="..."/>
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
            <img src={Rectangle56} className="card-img-top" alt="..."/>
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
            <img src={Rectangle57} className="card-img-top" alt="..."/>
            <div className="card-body m-3">
               <h6 className="card-title text-muted">LE JEUDI 13 OCTOBRE 2022 DE 10:00 A 10:45</h6>
               <p className="card-text">Dealing witch sollers</p>
               <p className="card-text"><small className="text-muted">En ligne</small></p>
               <p className='card-text'><img src={image9} alt=" petit"/><span className='ms-3'>Sollers consulting</span></p>
               <p className='text-muted mt-5'><CachedIcon/>En cours Termine dans 7 jours</p>
            </div>
        </div>
      </div>
      </div>
    </div>
      
    )
  }
}

export default Event3