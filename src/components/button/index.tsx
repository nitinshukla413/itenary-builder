const Button = ({ title, leadingIcon=<></>,onClick ,variant="primary"}: { title: string,leadingIcon?:any, onClick?: any ,variant?:"primary"|'secondary'}) => {
    return (
        <div className={`p-2 ${variant==="primary"?'bg-[#4D9FD7]':'white border border-[#4e4e4eee]'} flex justify-center items-center rounded-md w-full text-center cursor-pointer`} onClick={onClick} >
          {leadingIcon}
            <h3 className={`text-md  wider font-[600] ${variant==="primary"?'text-white':'text-[#4e4e4eee]'} `}>{title}</h3>
        </div>
        )
}
export default Button;