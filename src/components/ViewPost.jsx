import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const ViewPost = () => {
    const[post,changingpost]=useState(
     []
    )
    const fetchData=()=>
      axios.get("https://jsonplaceholder.typicode.com/posts").then(
        (response)=>{
          changingpost(response.data)
        }
      ).catch()

        useEffect(()=>{fetchData()},[])


   return (
        <div>
            
            <div className="container">
              <Nav/>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            
                                    <div className="co col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">USERID</th>
                                            <th scope="col">ID</th>
                                            <th scope="col">TITLE</th>
                                            <th scope="col">BODY</th>
                                         
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {post.map(
                                            (value,index)=>{
                                                return(
                                                    <tr>
                                            <th scope="row">{value.userId}</th>
                                            <td>{value.id}</td>
                                            <td>{value.title}</td>
                                            <td>{value.body}</td>
                                            
                                            
                                        </tr>


                                                )
                                            }
                                        )}
                                        
                                        
                                    </tbody>
                                </table>
                            </div>
                                    

                                
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewPost