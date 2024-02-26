//  import React, { useState } from 'react'
//  import { useSelector, useDispatch } from "react-redux"
//  import { useParams, useNavigate } from "react-router-dom"
//  import { updateUser } from "./UserReducer"
 
//  function Update() {

//     const { id } = useParams()
//     const users = useSelector((state) => state.users)
//     //eslint-disable-next-line
//     const existingUser = users.filter(f => f.id == id)
//     const { name, email } = existingUser[0]
//     const [uvalues, setUvalues] = useState({
//         name,
//         email
//     })

//     const dispatch = useDispatch()

//     const navigate = useNavigate()

//     const getData = (e) => {
//         setUvalues({...uvalues, [e.target.name]:e.target.value})
//     }

//     const addData = (e) => {
//         e.preventDefault()
//         dispatch(updateUser({
//             id: id,
//             name: uvalues.name,
//             email: uvalues.email   
//         }))
//         navigate('/')
//     }

//    return (
//     <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
//     <div className="w-50 border bg-secondary text-white p-5">
//       <h3>Update User</h3>
//       <form onSubmit={addData} >
//         <div>
//           <label htmlFor="name">Name : </label>
//           <input
//             type="text"
//             name="name"
//             className="form-control"
//             placeholder="Enter Name"
//             value={uvalues.name}
//             onChange={getData}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email : </label>
//           <input
//             type="email"
//             name="email"
//             className="form-control"
//             placeholder="Enter Email"
//             value={uvalues.email}
//             onChange={getData}
//           />
//         </div>{" "}
//         <br />
//         <button className="btn btn-info">Update</button>
//       </form>
//     </div>
//   </div>
//    )
//  }
 
//  export default Update



















import React, { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "./UserReducer"

const Create = () => {

    const { id } = useParams()
    const users = useSelector((state) => state.users)
    // eslint-disable-next-line
    const existingUser = users.filter(f => f.id == id)
    const { name, email } = existingUser[0]

    const [uvalues, setUvalues] = useState({
        name,
        email
    })

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const getData = (e) => {
        setUvalues({...uvalues, [e.target.name]:e.target.value})
    }

    const addData = (e) => {
        e.preventDefault()

        dispatch(updateUser({
            id: id,
            name: uvalues.name,
            email: uvalues.email
        }))
        navigate("/")
    }
  
  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center" >
    <div className='w-50 bg-secondary text-light p-5' >
    <h3>Update User</h3>
    <form onSubmit={addData} >
    <div>
    <label htmlFor="name">Name:</label>
    <input type="text" name="name" className="form-control" placeholder="Enter Name" value={uvalues.name} onChange={getData} />
    </div>
    <div>
    <label htmlFor="email">Email:</label>
    <input type="email" name="email" className="form-control" placeholder="Enter Name" value={uvalues.email} onChange={getData} />
    </div>
    <br />
    <button className="btn btn-info" >Submit</button>
    </form>
    </div>
    </div>
  )
}

export default Create