import { useState } from 'react'
import { Link } from 'react-router-dom'

import GenderCheckbox from "./GenderCheckbox"
import useSignup from '../../hooks/useSignup'

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const { loading, signup } = useSignup()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const handleCheckBoxChange = (gender) => {
    setInputs({
      ...inputs,
      gender
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(inputs)
  }

  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-6 h-full rounded-xl w-full bg-blue-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
        <h1 className=" text-3xl font-semibold text-center text-gray-300">
          Login
          <span className=" text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2" htmlFor="fullname">
              <span className="text-base label-text">Full name</span>
            </label>
            <input name='fullName' onChange={handleChange} type="text" id="fullname" placeholder="Enter username" className="w-full input input-bordered h-10" />
          </div>
          <div>
            <label className="label" htmlFor="username">
              <span className="text-base label-text">Username</span>
            </label>
            <input name='userName' onChange={handleChange} type="text" id="username" placeholder="Enter username"  className="w-full input input-bordered h-10" />
          </div>
          <div>
            <label className="label" htmlFor="password">
              <span className="text-base label-text">Password</span>
            </label>
            <input name='password' onChange={handleChange} type="password" id="password" placeholder="Enter password" autoComplete="new-password" className="w-full input input-bordered h-10" />
          </div>
          <div>
            <label className="label" htmlFor="confirm">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input name='confirmPassword' onChange={handleChange} type="password" id="confirm" placeholder="Confirm Password" className="w-full input input-bordered h-10" />
          </div>

          <GenderCheckbox onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender}/>

          <Link to="/login" className="text-sm hover:underline hover:text-blue-600">
            Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (<span className='loading loading-spinner'></span>) : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp