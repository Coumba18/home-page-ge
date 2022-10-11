import React, { Component } from 'react'
import image5 from '../images/image5.png';
import Vector from "../images/Vector.png";
import Vector1 from "../images/Vector1.png";
import Vector2 from "../images/Vector2.png";
import FRA from "../images/FRA.png";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export class Footer extends Component {
  render() {
    return (
      <div className='footer py-5 text-center'>
        <div className='row bg-dark pt-4'>
        <div className='col-md-6 col-sm-12 cool-xs-12'>
            <img src={image5} alt="" />
        </div>
        <div className='col-md-6 col-sm-12 cool-xs-12'>
          <div className='f-droite m-5'>
          <span className='bg-white m-3'>
                <img src={FRA} alt="" />
                français<span><ArrowDropDownIcon/></span>
            </span>
            <span>
            <img src={Vector} alt="" />
            <img src={Vector2} alt="" />
            <img src={Vector1} alt="" />
            </span>
          </div>    
        </div>
        </div> 
        <div className='row bg-dark text-white pt-4'>
        <hr className='footer-hr'/>
        <div className='col-md-3 col-sm-12 col-xs-12'>
            <p>S'inscrire</p>
            <p>Chercher une offre</p>
            <p>Découvrir les entreprises</p>
            <p>Evénements recrutement</p>
            <p>Conseils recrutement</p>
        </div>
        <div className='col-md-3 col-sm-12 col-xs-12'>
            <p>Écoles & Universités</p>
            <p>Notre offre Career Center</p>
            <p>Nos établissements partenaires</p>
        </div>
        <div className='col-md-3 col-sm-12 col-xs-12'>
            <p>Entreprises</p>
            <p>Notre offre Entreprise</p>
        </div>
        <div className='col-md-3 col-sm-12 col-xs-12'>
            <p>JobTeaser</p>
            <p>Nous rejoindre</p>
            <p>À propos</p>
            <p>Rencontrer notre équipe</p>
        </div>
        </div>
           <div className='row bg-dark text-white pt-4'>
           <hr className='footer-hr'/>
           <div className='col-md-2 col-sm-12 col-xs-12'>
              <p>Statuts </p>
           </div>
           <div className='col-md-2 col-sm-12 col-xs-12'>
             <p>Mentions légales </p>
           </div>
           <div className='col-md-2 col-sm-12 col-xs-12'>
             <p>Cookies</p>
           </div>
           <div className='col-md-2 col-sm-12 col-xs-12'>
              <p>Politique de confidentialité</p>
           </div>
           <div className='col-md-1 col-sm-12 col-xs-12'>
               <p>Securité</p>
           </div>
           <div className='col-md-3 col-sm-12 col-xs-12'>
              <p>Copyright © JobTeaser 2008-2022 </p>
           </div>
           </div>
        
        
      </div>
    )
  }
}

export default Footer