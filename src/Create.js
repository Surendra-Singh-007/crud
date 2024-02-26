// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux"
// import { addUser } from "./UserReducer"
// import { useNavigate } from "react-router-dom"

// function Create() {
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//   });

//   const dispatch = useDispatch()

//   const users = useSelector((state) => state.users)

//   const navigate = useNavigate()

//   const getData = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   const addData = (e) => {
//     e.preventDefault();
    
//     const {name, email} = values

//     dispatch(addUser({id: users[users.length - 1].id + 1, name, email}))

//     navigate('/')
//   };

//   return (
//     <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
//       <div className="w-50 border bg-secondary text-white p-5">
//         <h3>Add New User</h3>
//         <form onSubmit={addData}>
//           <div>
//             <label htmlFor="name">Name : </label>
//             <input
//               type="text"
//               name="name"
//               className="form-control"
//               placeholder="Enter Name"
//               onChange={getData}
//             />
//           </div>
//           <div>
//             <label htmlFor="email">Email : </label>
//             <input
//               type="email"
//               name="email"
//               className="form-control"
//               placeholder="Enter Email"
//               onChange={getData}
//             />
//           </div>{" "}
//           <br />
//           <button className="btn btn-info">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Create;














import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "./UserReducer"
import { useNavigate } from "react-router-dom"

const Create = () => {

  const [values, setValues] = useState({
    name: '',
    email: ''
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const users = useSelector((state) => state.users)
  
  const getData = (e) => {
    setValues({...values, [e.target.name]:e.target.value})
  }

  const addData = (e) => {
    e.preventDefault()

    const { name, email } = values
    dispatch(addUser({id: users[users.length - 1].id + 1, name, email}))
    navigate("/")
  }
  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center" >
    <div className='w-50 bg-secondary text-light p-5' >
    <h3>Add New User</h3>
    <form onSubmit={addData} >
    <div>
    <label htmlFor="name">Name:</label>
    <input type="text" name="name" className="form-control" placeholder="Enter Name" onChange={getData} />
    </div>
    <div>
    <label htmlFor="email">Email:</label>
    <input type="email" name="email" className="form-control" placeholder="Enter Name" onChange={getData} />
    </div>
    <br />
    <button className="btn btn-info" >Submit</button>
    </form>
    </div>
    </div>
  )
}

export default Create