import React, { Component } from 'react';

class Layout extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
       <div className="jumbotron jumbotron-fluid"> </div>
      <div className="card mx-auto">
        <div className="card-header text-center"><span className="font-italic font-weight-bold">tvpeter</span> Currency Converter</div>
        <div className="card-body">
          <p className="text-center text-muted">Select currency to convert</p>
          <div className="well mb-4 p-2 text-center">The area for the result</div>
          <div className="form-group row">
              <label className="col-sm-3 col-form-label">From:</label>
              <div className="col-sm-9">
                  <input type="text" className="form-control"/>
              </div>
          </div>
          <div className="form-group row">
              <label className="col-sm-3 col-form-label">Amount:</label>
              <div className="col-sm-9">
                  <input type="text" className="form-control"/>
              </div>
          </div>

          <div className="form-group row">
              <label className="col-sm-3 col-form-label">To</label>
              <div className="col-sm-9">
                  <input type="text" className="form-control"/>
              </div>
          </div>
         
                <div className="text-center">
                    <button type="submit" className="btn">Convert</button>
                </div>
        </div>
        <div className="card-footer text-center small">All rights reserved @<span id="year"></span></div>    
      </div>
      </React.Fragment>
     );
  }
}
 
export default Layout;