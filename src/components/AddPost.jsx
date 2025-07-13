import React from 'react'
import Nav from './Nav'

const AddPost = () => {
  return (
    <div>
      <center><h1 px-5 py-5>ADD POST DETAILS</h1></center>
      <div className="container">
        <Nav/>
        <div className="row  g-4 px-3 py-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">User ID</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                   <label htmlFor="" className="form-label">Id</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                   <label htmlFor="" className="form-label">Title</label>
                  <input type="text" className="form-control" />
                </div>
               
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                   <label htmlFor="" className="form-label">Body</label>
                   <textarea name="" id="" className="form-control"></textarea>
                </div>
                
                
                 
                  
                
              </div>
          </div>
        </div>
      </div>
 
    </div>
  )
}

export default AddPost