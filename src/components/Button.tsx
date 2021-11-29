import { ButtonHTMLAttributes } from "react";
import '../styles/buttonComponent.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props : ButtonProps) {

  return (
    <button className="buttonComponent" {...props}/> 
  );
}