import React from 'react'
function Alert(props) {
    const toUpper = (word)=>{
        let toUpperFunc = word[0].toUpperCase() + word.slice(1).toLowerCase()
        return toUpperFunc}
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{toUpper(props.alert.type)}</strong> : {props.alert.msg}
    </div>
  )
}
export default Alert
