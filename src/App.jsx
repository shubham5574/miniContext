
import './App.css'
import UsercontextProvider from './Context/UsercontextProvider'
import Login from './Componente/Login'
import Profile from './Componente/Profile'

function App() {


  return (
   <UsercontextProvider>
    <h2>context api</h2>
    <Profile/>
   <Login/>
   </UsercontextProvider>
  )
}

export default App
