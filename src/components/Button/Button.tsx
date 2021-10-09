import React from "react"

import "./button.css"

export interface ButtonProps {
  label?: string
  iconCls?: string
  primary?: boolean
  disabled?: boolean
  iconPosition: "left" | "right"
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
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary"

  const buttonClasses = ["storybook-button", `storybook-button--${size}`, mode]

  const labelClasses = [
    "storybook-button-label",
    `storybook-button-label--${size}`,
  ]

  if (iconCls) buttonClasses.push(iconCls)
  if (!label) buttonClasses.push("storybook-button--no-label")
  if (disabled) buttonClasses.push("storybook-button--disabled")
  if (iconPosition === "right")
    buttonClasses.push("storybook-button--icon-right")

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
