import React from "react";

export default function Login(setUserId) { 
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return(
    <div className="d-grid border rounded p-3">
      <LoginInput type="email" name="email" data={email} setData={setEmail} />
      <LoginInput type="password" name="password" data={password} setData={setPassword} />
      <LoginButton name="login" email={email} password={password} setUserId={setUserId} /> 
    </div>
  )
}

const LoginInput = ({type, name, data, setData}) => {
  return(
    <div className="m-1">
      <label htmlFor={`login-${name}`} className="form-label text-capitalize" >{name}</label>
      <input id={`login-${name}`} className="form-control" type={type} value={data} onChange={e => setData(e.target.value)} />
    </div>
  )
}

const LoginButton = ({name, email, password, setUserId}) => {
  const sendLogin = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
    .then(user => { setUserId(user) })
    .catch(error => { console.log('error') })
  }
  return(
    <button className="btn btn-primary text-capitalize" onClick={() => sendLogin(email,password)}>{name}</button>
  )
}
