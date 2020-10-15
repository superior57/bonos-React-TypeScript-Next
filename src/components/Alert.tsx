import PropTypes from "prop-types";
import React, { useState, FC } from "react";

const Warning = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={`alert-icon stroke-current inline-block h-5 w-5`}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

const Info = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={`alert-icon stroke-current inline-block h-5 w-5`}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

interface IconProps {
  type?: "warning" | "info";
}
const Icon = (props: IconProps) => {
  if (props.type === "warning") return <Warning />;
  if (props.type === "info") return <Info />;
  return null;
};

// Icon.propTypes = {
//   type: PropTypes.oneOf(["warning", "info"]),
// };

interface AlterProps extends IconProps {
  color: string;
  outlined: boolean;
  raised: boolean;
  flat: boolean;
  rounded: boolean;
  size: string;
}

export const Alert: FC<AlterProps> = ({
  color = "blue",
  outlined = false,
  raised = false,
  flat = false,
  rounded = false,
  type = null,
  size = "default",
  children,
}) => {
  const [hidden, setHidden] = useState(false);
  let css: string[] | string = [];
  if (outlined) css.push(`alert-outlined alert-outlined-${color}`);
  if (flat) css.push(`alert-flat alert-flat-${color}`);
  if (raised) css.push("alert-raised");
  if (rounded) css.push("alert-rounded");
  if (hidden) css.push("alert-hidden");
  css.push(`alert-${size}`);
  css = css.join(" ");
  return (
    <div className={`alert alert-${color} ${css}`}>
      <Icon type={type} />
      <div>{children}</div>
      <button
        className="alert-close flex items-center justify-center"
        onClick={() => setHidden(!hidden)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className={`stroke-current inline-block h-5 w-5`}
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
};

// Alert.propTypes = {
//   color: PropTypes.string,
//   outlined: PropTypes.bool,
//   raised: PropTypes.bool,
//   flat: PropTypes.bool,
//   rounded: PropTypes.bool,
//   type: PropTypes.oneOf(["warning", "info"]),
//   children: PropTypes.any,
// };
