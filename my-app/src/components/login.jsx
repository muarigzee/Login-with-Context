import  {useState , useContext} from 'react'
import UserContext from '../context/userContext';



function Login() {
  const [username , setUsername] = useState(''); 
  const [password,setPassword] = useState('')

const {setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
  e.preventDefault();
  setUser({username,password})
  }
  
    return (
    <div>
        <h2>Login</h2>
        <input type='text' placeholder='Enter your Name' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        {" "}
        <input type='password' placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br />
    
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login