import Login from "./components/login"
import Profile from "./components/profile"
import UserContextProvider from "./context/userContextProvider"


function App() {
  return (
    <UserContextProvider>
     <h1>Hi Users</h1>
     <Login/>
     <Profile/>

    </UserContextProvider>
  )
}

export default App