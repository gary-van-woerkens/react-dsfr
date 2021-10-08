import React from "react";

import "./button.css";

export interface ButtonProps  {
  label: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = true,
  size = "medium",
  onClick,
  label,
  disabled = false
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  const buttonClasses = [
    "ri-settings-3-line",
    "storybook-button",
    `storybook-button--${size}`,
    mode
  ]

  const labelClasses = [
    "storybook-button-label",
    `storybook-button-label--${size}`
  ]

  if (disabled) buttonClasses.push("storybook-button--disabled")

  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonClasses.join(" ")}
      disabled={!!disabled}
    >
      <span className={labelClasses.join(" ")}>{label}</span>
    </button>
  );
};

export default Button;
