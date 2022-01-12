import React from "react";

interface NavLinkProps {
  children: string;
  onSelect: () => void;
  isActive: boolean;
}

const NavLink = ({ children, onSelect, isActive }: NavLinkProps) => {
  return (
    <button
      className={isActive ? "nav-btn active" : "nav-btn"}
      onClick={onSelect}
    >
      {children}
    </button>
  );
};

export default NavLink;
