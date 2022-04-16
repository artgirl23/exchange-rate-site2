import React from 'react';

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Currency Exchange Rates</span>
      </nav>
      <div className="container py-3">
        {props.children}
      </div>
      <footer className="p-3 bg-light">
        <div className="mb-2">
          <a className="badge badge-dark" href="https://github.com/Altcademy/exchange-rate-site" target="_blank">GitHub</a>
        </div>
        <div>
          <span className="mr-3 text-secondary">Built by <a href="https://www.altcademy.com" target="_blank">Altcademy</a> with ☕ and 💜</span>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Layout;