import "./app.css"
import Auth from './container/auth.js'
import Header from './container/header.js'
import {UsercontextProvider } from "./context/userContext"

const App =()=>{
  return(
    <div className="ui container">
      <UsercontextProvider>
        <Header/>
        <Auth/>
      </UsercontextProvider>
    </div>
  )
}

export default App