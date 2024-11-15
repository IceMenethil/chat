import ConversationList from "./ConversationList"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"


const Sidebar = () => {
  return (
    <div className="border-r border-slate-400 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3 m-2" />
      <ConversationList />
      <LogoutButton />
    </div>
  )
}

export default Sidebar