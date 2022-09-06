import React from "react";

function MenuNavbarTwo(props) {
    return (
        <ul>
            <li className={"mb-3"}>
                <p className={"text-sm"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-3 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
                    </svg>
                    Twitter for Professionals
                </p>
            </li>
            <li className={"mb-3"}>
                <p className={"text-sm"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-3 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/>
                    </svg>
                    Twitter Ads
                </p>
            </li>
            <li className={"mb-3"}>
                <p className={"text-sm"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-3 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"/>
                    </svg>
                    Analytics
                </p>
            </li>
        </ul>
    )
}

export default MenuNavbarTwo;