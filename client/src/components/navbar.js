import React from 'react';


const Navbar = (props) => {
    console.log('test navbar');

    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <a className="navbar-brand" href="/">Bjornivars</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-a" href="/">{"Dashboard"}</a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="/blog/">{'Blog'}</a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="/job/">{'Jobs'}</a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="/profile/">{'Profile'}</a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="/contact/">{'Contact'}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
}

export default Navbar; 