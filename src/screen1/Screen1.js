import React from 'react'
import Search from './components/searchBar/Search';
// import Table from './components/table/Table';
import {Link} from 'react-router-dom'
import Footer from '../footer/Footer'

const Screen1 = () => {
    return (
      <div>
        <div className="style-rect"></div>
        <Search />
        <Link to="/Screen2">
          <button className="btn btn-up">View Updated List</button>
        </Link>
        <Footer/>
      </div>
    );
}

export default Screen1
