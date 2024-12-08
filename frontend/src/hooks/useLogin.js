import { useState } from "react"
import toast from "react-hot-toast";

import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoagind] = useState(false);
  const { setAuthUser } = useAuthContext()

  const login = async (userName, password) => {
    const success = handleInputErrors(userName, password);
		if (!success) return;
    setLoagind(true)
    try {

      const req = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({userName, password})
      })

      const data = await req.json();
      
      if (data.error) {
        throw new Error(data.error)
      }

      localStorage.setItem('authUser', JSON.stringify(data))
      setAuthUser(data)
      
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoagind(false)
    }
  }

  return { loading, login}
}

export default useLogin

function handleInputErrors(username, password) {
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}