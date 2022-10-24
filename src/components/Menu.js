import React, { Component } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';

export class Menu extends Component {
  render() {
    return (
        <div className='menu py-5 my-5 container'>
          <div className='row mx-5'>
            <div className='col-md-12 col-sm-12 col-xs-12 d-flex '>
            <input type="search" className='form-control ' />
            <button type='submit' className='btn btn-outline-success'><SearchIcon/></button>
            </div>
          </div>
        </div>
    )
  }
}

export default Menu