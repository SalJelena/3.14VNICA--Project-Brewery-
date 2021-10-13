import { useState } from "react"
import { getAllUsers } from "../../Service"
import { Link, useHistory } from "react-router-dom"
import StyledLogin from "./StyledLogin"

const Login = ({setUser, setUsers}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const isUserValid = (array) => {
        return (array.find(user => user.password === password && user.username === username))
    }

    return(
        <>
        <img src="https://res.cloudinary.com/dwrla4d2s/image/upload/v1633982169/final_project/main3_mwmm52.png" alt="img" width="100%" />
        <StyledLogin>
            <h2>Enter data to login</h2>
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
                    <input type="submit" value="Log in" />
                </form>

                    <div>
                        <Link to="/register" >Not registered?</Link>
                    </div>
        </StyledLogin>
        </>
    )
}

export default Login