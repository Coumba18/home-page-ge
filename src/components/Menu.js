import React, { Component } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';

export class Menu extends Component {
  render() {
    return (
        <div className='menu py-5 my-5 container shadow'>
          <div className='row'>
            <div className='col-md-2 col-sm-12 col-xs-12 text-muted position-relative'>
               <span className='position-absolute start-0 bottom-5'><SearchIcon/></span>
               <input type="search" className='ms-3 border-0 text-sm'placeholder='Que recherchez-vous?' />
            </div>
            <div className='col-md-2 col-sm-12 col-xs-12'>
                <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Types d'événements
                    </button>
                    <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton2">
                      <li><a className="dropdown-item " href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another</a></li>
                      <li><a className="dropdown-item" href="#">Something</a></li>
                    </ul>
                </div>
            </div>
            <div className='col-md-2 col-sm-12 col-xs-12'>
            <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" >
                    Dates
                    </button>
                    <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton2">
                      <li><a className="dropdown-item " href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another</a></li>
                      <li><a className="dropdown-item" href="#">Something</a></li>
                    </ul>
                </div>
            </div>
            <div className='col-md-2 col-sm-12 col-xs-12'>
            <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Lieux
                    </button>
                    <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton2">
                      <li><a className="dropdown-item " href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another</a></li>
                      <li><a className="dropdown-item" href="#">Something</a></li>
                    </ul>
                </div>
            </div>
            <div className='col-md-2 col-sm-12 col-xs-12'>
            <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Secteurs d'activités
                    </button>
                    <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton2">
                      <li><a className="dropdown-item " href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another</a></li>
                      <li><a className="dropdown-item" href="#">Something</a></li>
                    </ul>
                </div>
            </div>
            <div className='col-md-2 col-sm-12 col-xs-12'>
            <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Fonctions
                    </button>
                    <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton2">
                      <li><a className="dropdown-item " href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another</a></li>
                      <li><a className="dropdown-item" href="#">Something</a></li>
                    </ul>
                </div>
            </div>
            
          </div>

          {/* <div className='row '>
            <div className='col-md-2 col-sm-12 col-xs-12'>
              <input type="search" className='text-muted border-0 text-sm'placeholder='Que recherchez-vous?' />
            </div>
            <div className='col-md-2 col-sm-12 col-xs-12'>
              <ul>
                <li>
                  <a href='#'>Types d'événements<span><ArrowDropDownIcon/></span></a>
                  <ul>
                    <li><a href='#'>autre</a></li>
                    <li><a href='#'>some events</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='col-md-2 col-sm-12 col-xs-12'>
            <ul>
                <li>
                  <a href='#'>Dates<span><ArrowDropDownIcon/></span></a>
                  <ul>
                    <li><a href='#'>autre</a></li>
                    <li><a href='#'>some events</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='col-md-2 col-sm-12 col-xs-12'>
            <ul>
                <li>
                  <a href='#'>Lieux<span><ArrowDropDownIcon/></span></a>
                  <ul>
                    <li><a href='#'>autre</a></li>
                    <li><a href='#'>some events</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='col-md-2 col-sm-12 col-xs-12'>
            <ul>
                <li>
                  <a href='#'>Secteurs d'activités<span><ArrowDropDownIcon/></span></a>
                  <ul>
                    <li><a href='#'>autre</a></li>
                    <li><a href='#'>some events</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='col-md-2 col-sm-12 col-xs-12'>
            <ul>
                <li>
                  <a href='#'>Fonctions<span><ArrowDropDownIcon/></span></a>
                  <ul>
                    <li><a href='#'>autre</a></li>
                    <li><a href='#'>some events</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div> */}
          <div className='delete '>
            <DeleteIcon className='delete-icon ms-auto'/>
            </div>
        </div>
    )
  }
}

export default Menu