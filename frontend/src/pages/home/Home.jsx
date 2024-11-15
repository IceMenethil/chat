import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/message/MessageContainer'

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-blue-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home