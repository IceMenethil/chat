import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin"

 const Login = () => {
  const [inputs, setInputs] = useState({
    userName: '',
    password: ''
  })

  const {loading, login} = useLogin()

  const handleChange = (e) => {
    const {name, value} = e.target

    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(inputs.userName, inputs.password)
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
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              value={inputs.userName}
              onChange={handleChange}
              name="userName"
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              value={inputs.password}
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <Link to="/signup" className="text-sm hover:underline hover:text-blue-600">
            {"Dont't"} have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login