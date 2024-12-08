import useGetConversations from "../../hooks/useGetConversations"
import { getRandomEmoji } from "../../utils/emojis"
import Conversation from "./Conversation"

const ConversationList = () => {
  const { loading, conversations } = useGetConversations()

  return (
    <div className="py-2 px-2 flex flex-col overflow-auto">
      {conversations.map((item, index) => (
        <Conversation
          key={item._id}
          conversation={item}
          lastInx={index === conversations.length - 1}
          emoji={getRandomEmoji()}
        />
      ))}
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default ConversationList