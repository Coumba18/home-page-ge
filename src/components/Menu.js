import React, { Component } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteIcon from '@mui/icons-material/Delete';

export class Menu extends Component {
  render() {
    return (
        <div className='menu py-5 my-5 container shadow'>
          <div className='row'>
            <div className='col-md-2 col-sm-12 col-xs-12'>
              <p className='text-muted'>Que recherchez-vous?</p>
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
          </div>
          <div className='delete '>
            <DeleteIcon className='delete-icon ms-auto'/>
            </div>
        </div>
    )
  }
}

export default Menu