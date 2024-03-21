import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Button from "../button";

const Summary = () => {
    const days = [
        {
            no: 1,
            title: "Queenstown",
            subSteps: [
                {
                    title: "Amusement Park",
                    price: "40.55",
                },
                {
                    title: "Hotel Annuity, Lamp Street,",
                    price: "40.55",
                },
                {
                    title: "Queenstown",
                    price: "40.55",
                },
                {
                    title: "Packed Lunch",
                    price: "40.55",
                },
            ],
        },
        {
            no: 1,
            title: "Aukand",
            subSteps: [
                {
                    title: "Aukand title",
                    price: "40.55",
                },
                {
                    title: "Aukand title",
                    price: "40.55",
                },
                {
                    title: "Aukand title",
                    price: "40.55",
                },
                {
                    title: "Aukand title",
                    price: "40.55",
                },
            ],
        },
    ];
    const handleClick=()=>{

    }
    return (
        <div className="flex justify-center border border-gray-300 items-start w-full bg-gray-200/20 flex-col p-4">
            <div className="flex justify-start items-center w-full text-black space-x-3 py-5 border-b-2 border-gray-300">
                <DescriptionOutlinedIcon fontSize="medium" />
                <h2 className="font-[600] text-lg">Summary</h2>
            </div>
            <div className="flex flex-col  justify-start items-start w-full py-5 px-2">
                <h2 className="text-lg font-[600] text-black pb-5">Pricing</h2>
                {days.map((day,i) => (
                    <div key ={i} className="flex flex-col space-y-2 mb-5 items-start  w-full  justify-center">
                        <div className="flex justify-start space-x-1 items-center text-black font-[500] text-md">
                            <h2>Day {day.no}:</h2>
                            <h2> {day.title}</h2>
                        </div>
                        <div className="flex space-y-2 flex-col justify-start w-full items-center text-black">
                            {day.subSteps.map((elem,i) => {
                                return (
                                    <div key={i} className="flex justify-between w-full text-[#707070ee]">
                                        <h2 className="w-4/5"><TaskAltIcon fontSize="small" className="text-[#1ad81aee] mr-3" />{elem.title}</h2>
                                        <h2>&#x24;{elem.price}</h2>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col  justify-start items-start w-full py-5 px-2 border-t-2 border-gray-300">
                <h2 className="text-lg font-[600] text-black pb-5">Pricing</h2>
                <div className="flex flex-col space-y-2 mb-5 items-start  w-full  justify-center">
                    <div className="flex space-y-3 flex-col justify-start w-full items-center text-black">
                        <div className="flex justify-between w-full text-[#707070ee]">
                            <h2 className="w-4/5">Sub total</h2>
                            <h2>&#x24;{400}</h2>
                        </div>
                        <div className="flex justify-between w-full text-[#707070ee]">
                            <h2 className="w-4/5">Nett + Margin</h2>
                            <h2>20%</h2>
                        </div>
                        <div className="flex mt-10 justify-between w-full text-black font-bold ">
                            <h2 className="w-4/5">Total</h2>
                            <h2>&#x24;15000</h2>
                        </div>
                        <div className="flex justify-between w-full text-sm text-[#707070ee]">
                            <h2>Price quoted is inclusive of New Zealand GST</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Button title="Confirm Quotation" onClick={handleClick}/>
        </div>
    );
};
export default Summary;
