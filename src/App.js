// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [confirmpassword , setConfirmPassword] = useState("");

  const [emailValid , setEmailValid] = useState(false);
  const [passwordValid , setPasswordValid] = useState(false);
  const [confirmpasswordValid , setConfirmPasswordValid] = useState(false);

  const validateEmail = (email) => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailinput = (e) => {
    setEmail(e.target.value);
    setEmailValid(validateEmail(e.target.value));
  } 
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
    setPasswordValid(e.target.value.length >= 8);
  } 
  const handleConfirmPasswordInput = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordValid(e.target.value === password);
  } 


  
  const handleSubmit = (e) =>{
    e.preventDefault();
   
    
    if(emailValid && passwordValid && confirmpasswordValid){
      alert("From submitted Succesfully!");
    }
    else{
      alert("Form cannot be submitted!");
    }
  }


  return (
    <div className="App">
      <form  className='formN' action="" onSubmit={handleSubmit} >

        <label className='lblclass' htmlFor="email">Email:</label>
        <input type="email" 
        value={email} 
        onChange={handleEmailinput}
        style={{border : !emailValid ? "2px solid red" : "2px solid green"}}
        />
        {!emailValid && <p className="error">Invalid email address</p>}





        <label className='lblclass' htmlFor="password">Password:</label>
        <input type="password" value={password} 
        onChange={handlePasswordInput}
        style={{ border: !passwordValid ? '2px solid red' : '2px solid green'}}
        />
        {!passwordValid && <p className="error">Password must be at least 8 characters long!!</p>}
        

        <label className='lblclass' htmlFor="Confirm Password">Confirm Password:</label>
        <input type="password" 
        value={confirmpassword} 
        onChange={handleConfirmPasswordInput}
        style={{border: !confirmpasswordValid ? '2px solid red' : '2px solid green'}}
        />
        {!confirmpasswordValid && <p className="error">Passwords do not match</p>}


         <button className='btn'>Sign up</button>
      </form>
    
      
    </div>

    
  );
}

export default App;
