import styled from "styled-components";


const StyledGotIdea = styled.div`
    
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  width: 400px;
  text-align: center;

form {
  margin: 20px;
  background: rgba(255,255,255,0.3);
  padding: 3em;
  height: 320px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.3);
  backdrop-filter: blur(10px);
  box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
  text-align: center;
  position: relative;
  transition: all 0.2s ease-in-out;
  display:flex;
  justify-content: space-around;
  flex-direction: column;
}

input{
    background-color: #ececec;
    border-radius: 20px;
    border: none;
    padding: 10px;
}
input[type=submit]{
    background-color: black;
    color: white;
    cursor: pointer;
}

a {
    font-size: 1.2rem;
    font-weight: 400;
    text-decoration: none;
    padding: 0.8rem 2.5rem;
    border-radius: 3rem;
    background-color: #FFD700;
    color: #222;
}

`

export default StyledGotIdea