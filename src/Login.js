import React from "react";

export default function Login({setUserId}) { 
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [status, setStatus] = React.useState()

  return(
    <div style={{display: "grid", placeItems: "center", height: '100vh'}}>
      <div className="col-10 d-grid border rounded p-3">
        <h3>Login</h3>
        <LoginInput type="email" name="email" data={email} setData={setEmail} />
        <LoginInput type="password" name="password" data={password} setData={setPassword} />
        <LoginButton name="login" email={email} password={password} setUserId={setUserId} setStatus={setStatus} /> 
        <LoginStatus status={status} />

      </div>
    </div>
  )
}

const LoginInput = ({type, name, data, setData}) => {
  return(
    <div className="m-1">
      <label htmlFor={`login-${name}`} className="form-label text-capitalize" >{name}</label>
      <input id={`login-${name}`} className="form-control" type={type} value={data} onChange={e => { setData(e.target.value) }} />
    </div>
  )
}

const LoginButton = ({name, email, password, setUserId, setStatus}) => {
  const sendLogin = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
    .then(result => { 
      setUserId(result.user.uid); 
      setStatus({ result: "success", message: 'Login Success' }); 
    })
    .catch(error => { 
      setStatus({ result: "error", message: error.message }); 
    })
  }

  return(
    <button className="m-1 my-2 btn btn-primary text-capitalize" onClick={() => { sendLogin(email,password) }}>{name}</button>
  )
}

const LoginStatus = ({status}) => {
  let alertColor = (status)?(status.result == "success")?"alert-success":"alert-danger":""
  return (
    (status)?<div className={"m-1 alert "+alertColor} role="alert">{status.message}</div>:null
  )
}


