import './App.css'
import ChanList from './components/ChanList'
import Navbar from './components/Navbar'
import UserChannels from './components/UserChannel'

function App() {
  return (
    <section className="bg-gray-950">
      <Navbar/>
      <div className="grid grid-cols-[240px_auto] min-h-[calc(100vh-3rem)]">
        <UserChannels/>
        <ChanList/>  
      </div>
    </section>
  )
}

export default App
