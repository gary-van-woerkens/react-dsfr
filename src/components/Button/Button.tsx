import React from "react"

import "./button.scss"

export interface ButtonProps {
  label?: string
  iconCls?: string
  primary?: boolean
  disabled?: boolean
  iconPosition?: "left" | "right"
  size?: "small" | "medium" | "large"
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button = ({
  label,
  onClick,
  iconCls,
  primary = true,
  size = "medium",
  disabled = false,
  iconPosition = "left",
}: ButtonProps): JSX.Element => {
  const mode = primary ? "primary" : "secondary"

  const buttonClasses = ["button", `${size}`, mode]

  const labelClasses = ["label", `${size}`]

  if (iconCls) buttonClasses.push(iconCls)
  if (!label) buttonClasses.push("no-label")
  if (disabled) buttonClasses.push("disabled")
  if (iconPosition === "right") buttonClasses.push("icon-right")

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!!disabled}
      className={buttonClasses.join(" ")}
    >
      <span className={labelClasses.join(" ")}>{label}</span>
    </button>
  )
}

export default Button
