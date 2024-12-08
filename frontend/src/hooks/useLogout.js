import { useState } from 'react';
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext';

const useLogout = () => {
  const [login, setLogin] = useState(false);
  const { setAuthUser } = useAuthContext()

  const logout = async () => {
    setLogin(true)
    try {
      const req = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await req.json();

      if (data.error) {
        throw new Error(data.error)
      }

      localStorage.removeItem('authUser')
      setAuthUser(null)
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLogin(false)
    }
  }

  return { login, logout }
}

export default useLogout