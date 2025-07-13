import React from 'react'
import Nav from './Nav'

const DeletePost = () => {
  return (
    <div>
          <center><h1 px-5 py-5>Search</h1></center>
            <div className="container">
                <Nav/>
                <div className="row g-4 px-3 py-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Post name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default DeletePost