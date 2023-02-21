import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'

function App() {
  return (
    <div className='App'>

      {/* si pasas una prop sin =, se entiende que es true por defecto */}
      <TwitterFollowCard userName="midudev">
        Miguel Ángel Durán
      </TwitterFollowCard>
      <TwitterFollowCard userName="DarianaSmile">
        Darianaaa
      </TwitterFollowCard>
      <TwitterFollowCard userName="maikconk" >
        Miguel Baños Folcrá
      </TwitterFollowCard>
      <TwitterFollowCard userName="HasbullaHive">
        Hasbulla
      </TwitterFollowCard>

    </div>
  )
}

export default App

// te has quedado por: 2.09.43