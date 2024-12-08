import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import useConversation from '../state/useConversation'

const useGetMessage = () => {
  const [loading, setLoading] = useState();
  const {messages, setMessages, selectedConversation} = useConversation()

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const req = await fetch(`/api/messages/${selectedConversation._id}`)
        const data = await req.json();
  
        if (data.error) throw new Error(data.error);
  
        setMessages(data)
      } catch (error) {
        toast.error(error.message)
      } finally {
        setLoading(false)
      }
    }

    if (selectedConversation?._id) getMessages()
  }, [selectedConversation?._id, setMessages])

  return { loading, messages}
}

export default useGetMessage