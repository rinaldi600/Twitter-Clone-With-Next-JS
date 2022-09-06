import Image from "next/image";
import React from "react";

function WhoFollowPeople(props) {
    return (
        <div className={'h-[72px] grid content-center cursor-pointer hover:bg-[#E7E7E8]'}>
            <div className={"pl-3 flex gap-2"}>
                <div className={`rounded-full w-[40px] h-[40px] lg:w-[48px] block lg:h-[48px] overflow-hidden`}>
                    <Image
                        src={props.image}
                        width={48}
                        height={48}
                        className={"cursor-pointer"}
                    />
                </div>
                <div className={"w-[80%] flex justify-between items-center"}>
                    <div>
                        <p className={"text-[15px] font-bold"}>Rinaldi Hendrawan</p>
                        <p className={"text-[15px] text-[#5D6D79]"}>@RinaldiH007</p>
                    </div>
                    <button className={"bg-[#272C30] text-white font-bold w-[78px] rounded-full h-[32px]"}>Follow</button>
                </div>
            </div>
        </div>
    )
}

export default WhoFollowPeople