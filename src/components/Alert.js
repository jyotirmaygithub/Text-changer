import React from 'react'

export default function Alert(props) {
  function tocapitalize(word){
    let capitalone = word.charAt(0).toUpperCase();
    return capitalone + word.slice(1)
  }
  return (
    <div style={{height:"10vh"}}>
  {props.defaultalert && <div className={`alert alert-${props.defaultalert.type} alert-dismissible fade show`} role="alert">
    {tocapitalize(props.defaultalert.type)}<strong>{props.defaultalert.msg}</strong>
  </div>}
    </div>
  )
}
