import { useState } from "react"
import { useHistory } from "react-router"
import { getAllUsers, postUser } from "../../../Service"
import { v1 as uuidv1 } from 'uuid'
import StyledRegister from "./StyledRegister"

const Register = ({setUsers}) => {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const history = useHistory()

    const isValidNewUser = (array) => {
        if(!array.find(user => user.username === username || user.email === email)
        && email.includes('@' && '.')
        && username.length >= 4
        && password.length > 8  
   
        ){
            return true
        }
    }

    return(
        <>
         <img src="https://res.cloudinary.com/dwrla4d2s/image/upload/v1633982169/final_project/main3_mwmm52.png" alt="img" width="100%" />
        <StyledRegister>
            <h2>Please enter data to register</h2>
                <form onSubmit={(e)=>{
                    e.preventDefault()

                    getAllUsers().then(res => {
                        setUsers(res.data)

                        if(isValidNewUser(res.data)){
                            let user = {
                                id: uuidv1(),
                                username: username,
                                email: email, 
                                password: password
                            }

                            postUser(user).then(res => {
                                setUsers(prev => [...prev, res.data])
                                //console.log(res.data);
                            })
                            history.push('/gotidea')
                        }else{
                            console.log('Mistake!');
                        }
                    })



                }} >
                    <input type="text" placeholder="Enter username" onChange={(e)=>{
                        setUsername(e.target.value)
                    }} />
                     <input type="text" placeholder="Enter email" onChange={(e)=>{
                        setEmail(e.target.value)
                    }} />
                    <input type="password" placeholder="Enter password" onChange={(e)=>{
                        setPassword(e.target.value)
                    }} />
                    <input type="submit" value="Register" />
                </form>
        </StyledRegister>
        </>
    )
}

export default Register