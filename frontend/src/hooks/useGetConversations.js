import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
const useGetConversations = () => {
  const [loading, setLoading] = useState(false)
  const [conversations, setConversations] = useState([])

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const req = await fetch('/api/users')
        const data = await req.json();

        if(data.error) {
          throw new Error(data.error)
        }
        setConversations(data)
      } catch (error) {
        toast.error(error.message)
      } finally {
        setLoading(false)
      }
    }
    getConversations()
  }, [])

  return { loading, conversations }
}

export default useGetConversations