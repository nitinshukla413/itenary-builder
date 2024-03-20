const Button = ({ title, onClick ,variant="primary"}: { title: string, onClick?: any ,variant?:"primary"|'secondary'}) => {
    return (
        <div className={`p-2 ${variant==="primary"?'bg-[#4D9FD7]':'white border border-[#4e4e4eee]'} rounded-md w-full text-center cursor-pointer`} onClick={onClick} >
            <h3 className={`text-md  wider ${variant==="primary"?'text-white':'text-[#4e4e4eee]'} `}>{title}</h3>
        </div>
        )
}
export default Button;