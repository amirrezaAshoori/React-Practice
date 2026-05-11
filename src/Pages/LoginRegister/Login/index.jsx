// import { useContext } from 'react'
import useFormFields from '../../../Utils/useFormFields'
// import authContext from '../../../Utils/authContext'
import { useDispatch } from 'react-redux';
import { login } from '../../../Store/Slices/Auth';
import React from 'react';


export default function Login(handlePageType) {
  const [fields, handleChange] = useFormFields()
  // const [token, handleToken] = useContext(authContext)
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields)
      })
      const data = await res.json()
      console.log(data);
      alert('login successfully')
      dispatch(login(data.token))
    } catch (error) {
      alert('UserName or Password is invalid')
    }
  }


  return (
    <form className='container mt-5' onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
        <input type="text" onChange={handleChange} className="form-control" name='username' id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className='mb-3'>
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" onChange={handleChange} className="form-control" name='password' id="exampleInputPassword1" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <button className='btn btn-primary ms-4' onClick={handlePageType}>Don't have a account ? Register Page</button>
    </form>
  )
}
