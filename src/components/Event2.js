import React, { Component } from 'react'
import image8 from "../images/image8.png";
import image9 from "../images/image9.png";
import Rectangle50 from "../images/Rectangle50.png";
import Rectangle51 from "../images/Rectangle51.png";
import PeopleIcon from '@mui/icons-material/People';
import CachedIcon from '@mui/icons-material/Cached';

export class Event2 extends Component {
  render() {
    return (
      <div className='a-event event2 py-5'>
        <h4 >Accompagnement carrière</h4>
        <div className='row'>
        <div className='col-md-4 col-sm-12 col-xs-12'>
        <div className="card border-0 shadow m-4">
    <img src={image8} className="card-img-top rect1" alt="..."/>
    <div className="card-body m-3">
      <h6 className="card-title text-muted">LE JEUDI 13 OCTOBRE 2022 DE 10:00 A 10:45</h6>
      <p className="card-text">Dealing witch sollers</p>
      <p className="card-text"><small className="text-muted">En ligne</small></p>
      <p className='card-text'><img src={image9} alt=" petit"/><span className='span ms-3'>Sollers consulting</span></p>
      <hr className='mt-5'/>
      <p className='text-muted'><PeopleIcon/>56 étudiant sont intressée</p>
    </div>
  </div>
        </div>
        <div className='col-md-4 col-sm-12 col-xs-12'>
        <div className="card border-0 shadow m-4">
    <img src={Rectangle50} className="card-img-top " alt="..."/>
    <div className="card-body m-3">
      <h6 className="card-title text-muted">LE JEUDI 13 OCTOBRE 2022 DE 10:00 A 10:45</h6>
      <p className="card-text">Dealing witch sollers</p>
      <p className="card-text"><small className="text-muted">En ligne</small></p>
      <p className='card-text'><img src={image9} alt=" petit" className=''/><span className='ms-3'>Sollers consulting</span></p>
      <hr className='mt-5'/>
      <p className='text-muted'><CachedIcon/>En cours Termine dans 8 jours</p>
    </div>
  </div>
 </div>
        <div className='col-md-4 col-sm-12 col-xs-12'>
        <div className="card border-0 shadow m-4">
    <img src={Rectangle51} className="card-img-top" alt="..."/>
    <div className="card-body m-3">
      <h6 className="card-title text-muted">LE JEUDI 13 OCTOBRE 2022 DE 10:00 A 10:45</h6>
      <p className="card-text">Dealing witch sollers</p>
      <p className="card-text"><small className="text-muted">En ligne</small></p>
      <p className='card-text'><img src={image9} alt=" petit"/><span className='ms-3'>Sollers consulting</span></p>
      <hr className='mt-5'/>
      <p className='text-muted'><CachedIcon/>En cours Termine dans 7 jours</p>
    </div>
 </div>
</div>
</div>
<a href='#'>Voir les événements</a>
</div>
      
    )
  }
}

export default Event2