import React from "react"

import "./header.scss"

export interface HeaderProps {
  service: string
  entity?: string
  baseline?: string
  children?: JSX.Element
}

const Header = ({
  service,
  baseline,
  entity = "République Française",
  children,
}: HeaderProps): JSX.Element => {
  return (
    <div className="header">
      <div className="logo">{entity}</div>
      <div className="brand">
        <div className="service">{service}</div>
        {baseline && <div className="baseline">{baseline}</div>}
      </div>
      <div className="links">{children}</div>
    </div>
  )
}

export default Header
