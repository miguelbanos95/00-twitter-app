import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true,
  },
  {
    userName: 'DarianaSmile',
    name: 'Darianaaa',
    isFollowing: true,
  },
  {
    userName: 'maikconk',
    name: 'Miguel Baños Folcrá',
    isFollowing: true,
  },
  {
    userName: 'HasbullaHive',
    name: 'Hasbulla',
    isFollowing: false,
  }
]

function App() {
  return (
    <section className='App'>
      {/* Lo que envuelve dentro de "TwitterFollowCard" es el "children" 
      y puedes poner tanto una cadena como etiquetas ej: <span>Juan perez</span>  */}
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}>

            {/* El "name" se pone aqui porque es el "children" (que se pasa como prop) sino, 
          se pondría directamente como prop el "name" */}
            {name}
          </TwitterFollowCard>)
        )
      }
    </section>
  )
}

export default App

// te has quedado por: 2.09.43