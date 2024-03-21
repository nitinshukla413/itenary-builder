import { ReactNode } from "react";

const Button = ({
  title,
  leadingIcon = <></>,
  onClick,
  variant = "primary",
  children // Include children in the type definition
}: {
  title?: string,
  leadingIcon?: ReactNode, // Use ReactNode for children types
  onClick?: () => void,
  variant?: "primary" | 'secondary',
  children?: ReactNode // Specify children prop
}) => {
  return (
    <div className={`p-2 ${variant === "primary" ? 'bg-[#4D9FD7]' : 'white border border-[#4e4e4eee]'} flex justify-center items-center rounded-md w-full text-center cursor-pointer`} onClick={onClick} >
      {leadingIcon}
      <h3 className={`text-md  wider font-[600] ${variant === "primary" ? 'text-white' : 'text-[#4e4e4eee]'} `}>{title}</h3>
      {children} {/* Render children if provided */}
    </div>
  );
}

export default Button