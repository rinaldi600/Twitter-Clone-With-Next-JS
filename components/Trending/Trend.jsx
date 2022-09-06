import React from "react";

function Trend(props) {
    return (
        <div className={'h-[82px] grid content-center cursor-pointer hover:bg-[#E7E7E8]'}>
            <div className={"pl-3"}>
                <p className="text-[13px] text-[#5D6D79]">Trending di Indonesia</p>
                <p className="text-[15px] font-bold">Baim Wong</p>
                <p className="text-[13px] text-[#5D6D79]">19.6K Tweets</p>
            </div>
        </div>
    )
}

export default Trend;