import React, { useState, useEffect } from 'react'

import { connect } from "react-redux";
import { sidebarMenuToggle } from "Actions/helper"

const Index = ({sidebarMenuToggle}) => {
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    sidebarMenuToggle(toggle)
  })

  const click = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <div>welcome to the next</div>
      <button onClick={click}>button</button>
    </>
  )
}

export default connect(null, {sidebarMenuToggle})(Index)