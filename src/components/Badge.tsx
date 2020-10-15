import React from "react";

export const Badge = ({
  rounded = false,
  outlined = false,
  alt = false,
  size = "default",
  color = "indigo",
  children,
}) => {
  let css: string[] | string = [];
  if (rounded) css.push("rounded-lg");
  css = css.join(" ");
  if (alt) {
    return (
      <span className={`badge badge-${size} badge-alt-${color} ${css}`}>
        {children}
      </span>
    );
  }
  if (outlined) {
    return (
      <span
        className={`badge badge-${size} badge-outlined badge-outlined-${color} ${css}`}
      >
        {children}
      </span>
    );
  }
  return (
    <span className={`badge badge-${size} badge-${color} ${css}`}>
      {children}
    </span>
  );
};

export const CircularBadge = ({
  size = "default",
  outlined = false,
  alt = false,
  color = "indigo",
  children,
}) => {
  if (alt) {
    return (
      <span className={`badge badge-circle badge-${size} badge-alt-${color}`}>
        {children}
      </span>
    );
  }
  if (outlined) {
    return (
      <span
        className={`badge badge-circle badge-${size} badge-outlined badge-outlined-${color}`}
      >
        {children}
      </span>
    );
  }

  return (
    <span className={`badge badge-circle badge-${size} badge-${color}`}>
      {children}
    </span>
  );
};
