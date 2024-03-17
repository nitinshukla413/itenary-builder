const Button = ({ title, onClick }: { title: string, onClick: any }) => {
    return (<div className="p-2 bg-blue-400 rounded-lg w-full text-center cursor-pointer" onClick={onClick} ><h3 className="text-md text-white wider">{title}</h3></div>)
}
export default Button;