import Image from "next/image";
import React from "react";

function Tweet(props) {
    return (
        <div style={{borderBottom : '1px solid rgb(239,243,244)'}} className={"min-h-[80px] flex"}>
            <div className={"w-[15%] min-h-max grid items-start justify-center"}>
                <div className={`rounded-full w-[40px] block h-[40px] mt-3 overflow-hidden`}>
                    <Image
                        src={props.image}
                        width={48}
                        height={48}
                        className={"cursor-pointer"}
                    />
                </div>
            </div>
            <div className={"w-[85%] pt-0.5 pb-0.5 min-h-max overflow-hidden"}>
                <div className={"text-sm"}>
                    <p className={"font-bold inline-block"}>Mupi</p>
                    <p style={{color : '#536471'}} className={"inline-block ml-1"}>@moviemenfes</p>
                    <p style={{color : '#536471'}} className={"inline-block ml-1"}>  3h</p>
                </div>
                <div className={"mt-1"}>
                    <p className={"text-sm"}>did it hurt? when u realised u weren’t that special</p>
                </div>
                <div className={"w-[80%] justify-between flex min-h-full mt-3 p-0.5"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke-width="1.5" stroke="currentColor" className="w-[18.5px] hover:bg-[#E1EEF6] hover:rounded-full hover:p-0.5 hover:text-[#1A8CD8] h-[18.5px] text-[#536471] cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke-width="1.5" stroke="currentColor" className="w-[18.5px] h-[18.5px] hover:bg-[#DEF1EB] hover:text-[#2AC491] hover:rounded-full hover:p-0.5 text-[#536471] cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke-width="1.5" stroke="currentColor" className="w-[18.5px] hover:bg-[#F7E0EB] hover:rounded-full hover:p-0.5 hover:text[#F86FAF] h-[18.5px] text-[#536471] cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke-width="1.5" stroke="currentColor" className="w-[18.5px] hover:bg-[#E1EEF6] hover:rounded-full hover:p-0.5 hover:text-[#1A8CD8] h-[18.5px] text-[#536471] cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Tweet;