import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface ScrollLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export const ScrollLink: React.FC<ScrollLinkProps> = ({ to, children, onClick, ...rest }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = to.replace(/^#/, '');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};