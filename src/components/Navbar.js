import React, { Component } from 'react'
import image7 from "../images/image7.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={image7} alt=" image" className='nav-img' /></a>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
          </button> */}
          {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item m-2">
                <a className="nav-link" href="#">< AccountCircleIcon /><span className='ms-2'>Connexion</span></a>
              </li>
            </ul>
          {/* </div> */}
        </div>
      </nav>
    )
  }
}

export default Navbar