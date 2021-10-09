import React from "react"

import "./header.css"

export interface HeaderProps {
  title: string
}

const Header = ({ title = "" }: HeaderProps): JSX.Element => {
  return <div>{title}</div>
}

export default Header
