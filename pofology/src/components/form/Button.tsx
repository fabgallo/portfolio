import classNames from 'classnames';
import React, { MouseEventHandler } from 'react';

interface Props {
  type?: 'button' | 'submit';
  className?: string;
  onClick?: MouseEventHandler;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ type = 'submit', children, className, onClick }) => {
  return (
    <button type={type} className={classNames(['btn', className])} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
