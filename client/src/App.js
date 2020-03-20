import { useRouteMatch} from "react-router";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';
import Navbar from './components/navbar';
import Footer from './components/footer';


export default function App(props) {

    return (
      <div className='App'>
        <Navbar />   
          {props.children}
          <Footer />
      </div>
    )

  }

