import React from 'react';

const Layout = (props) => {
  return (
    <React.Fragment>
      <div class="navbar clearfix">
        <div class="navbar-inner">
          <div class="wrapper clearfix">
    <div id="headerTri"></div>
      <a class="navtoggle" id="navtoggle">
        <div class="nav-icon"></div>
      </a>
      <nav class="nav-collapse">
        <ul class="nav">
          <li class="selected">
            <a href="/" rel="homepage">Home</a>
          </li>
          <li>
          <a href="/currencyconverter" rel="currencyconverter">CurrencyConverter</a>
          </li>



        </ul>
       
      </nav>
      </div>
      </div>
      </div>
      <div className="container py-3">
        {props.children}
      </div>
      <footer className="p-3 bg-light">
        <div class="navbar clearfix">
          <div class="navbar-inner">
            <div class="wrapper clearfix">
              <nav class="nav-collapse">
                <ul class="nav">
                  <li>
                  <a href="/" rel="homepage">Terms of Service</a>
                  </li>
                  <li>
                  <a href="/" rel="homepage">Privacy</a>
                  </li>
                  <li>
                  <a href="/" rel="homepage">Cookie Policy</a>
                  </li>
                  <li>
                  <a href="/" rel="homepage">Advertise</a>
                  </li>
                  <li>
                  <a href="/" rel="homepage">Feedback</a>
                  </li>
                  <li>
                  <a href="/" rel="homepage">FAQ</a>
                  </li>
                </ul>
              </nav>
              </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Layout;