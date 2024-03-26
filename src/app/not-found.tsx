import Link from "next/link";

const NotFound = (props: any) => {
    return (
        <div className="pt-[82px] h-screen bg-white lg:pt-[106px]">
            <div className="flex min-h-[500px] items-center justify-center">
                <div className="p-5 text-center font-semibold">
                    <h2 className="mb-8 text-[50px] font-bold leading-none text-black md:text-[80px]">
                        404
                    </h2>
                    <h4 className="mb-5 text-xl font-semibold text-primary sm:text-5xl">
                        Ooops!
                    </h4>
                    <p className="text-black">The page you requested was not found!</p>
                    <Link href="/" className="btn mx-auto mt-10 w-max">
                        Back To Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
