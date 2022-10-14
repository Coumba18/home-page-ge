import React, { Component } from 'react'
import image7 from "../images/image7.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Group from "../images/Group.png";

export class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={image7} alt=" image" className='nav-img' /></a>
            <ul className="navbar-nav align-items-center ms-auto">
               <li className="nav-item m-2">
                <a className="nav-link" href="#">< AccountCircleIcon /><span className='ms-2'>Connexion</span></a>
              </li> 
              {/* <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                < AccountCircleIcon /><span className='ms-2'>Connexion</span>
                </a>
                <ul className="dropdown-menu text-xs" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      <img src={Group} className="key" alt="..."/>
                      <span className='ms-2 fw-bold'>Connexion</span>
                      <p className='text-center'>Découvrez les nouveaux  contenus publiés<br/> depuis votre derniere connexion</p>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <img src={Group} className="key" alt="..."/>
                      <span className='ms-2 fw-bold'>Inscription</span>
                      <p className='text-center'>Découvrez les nouveaux  contenus publiés<br/> depuis votre derniere connexion</p>
                    </a>
                  </li>
               </ul> */}
              {/* </li> */}
            </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar