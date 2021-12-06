import { ButtonHTMLAttributes } from "react";
import '../styles/buttonComponent.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
};

export function Button({ isOutlined = false,...props }: ButtonProps) {
  return (
    <button 
      className={`buttonComponent ${isOutlined ? 'outlined' : ''}`}
      {...props}/> 
  );
}