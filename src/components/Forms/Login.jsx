import { useState } from "react"
import { getAllUsers } from "../../Service"
import { Link, useHistory } from "react-router-dom"

const Login = ({setUser, setUsers}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const isUserValid = (array) => {
        return (array.find(user => user.password === password && user.username === username))
    }

    return(
        <div>
            <h2>Enter data to login.</h2>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    
                    getAllUsers().then(res => {
                        setUsers(res.data)
                        // console.log(res.data);
                        let maybeUser = isUserValid(res.data)

                        if(maybeUser) {
                            setUser(maybeUser)
                            history.push('/gotidea')
                        }else{
                            console.log('Mistake.');
                        }

                    })

                }} >
                    <input type="text" placeholder="Username..." onChange={(e)=>{
                        setUsername(e.target.value)
                    }} />
                    <input type="password" placeholder="Password..." onChange={(e)=>{
                        setPassword(e.target.value)
                    }} />
                    <input type="submit" value="LogIn" />
                </form>

                    <div>
                        <Link to="/register" >Not registered?</Link>
                    </div>
        </div>
    )
}

export default Login