
import { AiOutlinePlus } from "react-icons/ai";
import { WalletButton } from "../WalletButton/WalletButton";

export function Navbar() {

    function newPost() {
        console.log("new post pressed")
    }

    return (
        <div className="fixed flex flex-row h-[100px] w-[100%] 
        items-center justify-end bg-white border-b-[1px] border-solid border-gray-300
        pr-[20px] pl-[20px]">

            <img className="w-[50px] h-[50px] bg-red-400 justify-self-start mr-auto" />
            <AiOutlinePlus
                className='cursor-pointer'
                size={"35px"}
                onClick={() => { newPost() }} />
            <WalletButton />
        </div>
    )
}