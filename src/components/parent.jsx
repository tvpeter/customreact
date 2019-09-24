import React, { Component } from 'react';

class Layout extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <div className="jumbotron jumbotron-fluid">
        </div>
        <div className="card mx-auto">
        <div className="card-header text-center"><span className="font-italic font-weight-bold">tvpeter</span> Currency Converter</div>
        <div className="card-body">Content</div>
        <div className="card-footer text-center font-weight-light">All rights reserved @<span id="year"></span></div>    
      </div>
      </React.Fragment>
     );
  }
}
 
export default Layout;