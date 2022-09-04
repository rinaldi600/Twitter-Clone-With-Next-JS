import Head from 'next/head'
import {signOut, useSession, getSession} from "next-auth/react";
import React, {useEffect, useState} from "react";
import Image from 'next/image'
import TwitterBirdLogo from "../../asset/icons/logo-twitter-png-5860.png";


function Home({checkAuth}) {
    const { data : session } = useSession();
    const [showNavigation, setNavigation] = useState(false);
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
    const [logout, setLogout] = useState(false);
    const [number, setNumber] = useState(0);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [width]);

    useEffect(() => {
        if (width >= 1024) {
            setNavigation(false);
        }
    });

    const show = () => {
        setNavigation(true);
    };

    const close = () => {
        setNavigation(false);
    };

    const logoutModal = () => {
        setNumber(number + 1);
    };

    useEffect(() => {
        console.log(number);
        if (number % 2 !== 0) {
            setLogout(true)
        } else {
            setLogout(false);
        }
    },[number]);

    if (session) {
        return (
            <div>
                <Head>
                    <title>Home / Twitter</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="shortcut icon" href="/logo-twitter-png-5860-16x16.ico" />
                </Head>
                <div className={`min-h-screen bg-red-300 flex`}>
                    <div style={{borderRight : '1px solid rgb(239,243,244)'}} className={`w-[55%] md:w-[30%] ${showNavigation ? 'block absolute inset-0 min-h-screen z-50' : 'hidden min-h-fit'} lg:block lg:w-[25%] bg-white`}>
                        <div className={`h-8 ${showNavigation ? 'flex' : 'hidden'} justify-between p-2 items-center`}>
                            <h2 className={"text-lg font-bold mobile:text-sm"}>Account Info</h2>
                            <div>
                                <svg onClick={close} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </div>
                        </div>
                        <div className={"min-h-[100px] lg:hidden grid content-center p-2"}>
                            <div className={"flex justify-between"}>
                                <div className={`rounded-full w-[35px] h-[30px] overflow-hidden`}>
                                    <Image
                                        onClick={show}
                                        src={session.user.image}
                                        width={35}
                                        height={35}
                                    />
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <div>
                                <p className={"font-bold text-sm"}>{session.user.name}</p>
                            </div>
                        </div>
                        <div className={"p-2"}>
                            <div>
                                <div className={"lg:block hidden"}>
                                    <Image
                                        src={TwitterBirdLogo}
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <ul>
                                    <li className={"lg:mb-8 lg:mt-3 mb-3"}>
                                        <p className={"lg:text-xl"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-3 inline-block">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                                            </svg>
                                            Profile
                                        </p>
                                    </li>
                                    <li className={"lg:mb-8 mb-3"}>
                                        <p className={"lg:text-xl"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-3 inline-block">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                                            </svg>
                                            List
                                        </p>
                                    </li>
                                    <li className={"lg:mb-8 mb-3"}>
                                        <p className={"lg:text-xl"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-3 inline-block">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
                                            </svg>
                                            Topics
                                        </p>
                                    </li>
                                    <li className={"lg:mb-8 mb-3"}>
                                        <p className={"lg:text-xl"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-3 inline-block">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"/>
                                            </svg>
                                            Bookmarks
                                        </p>
                                    </li>
                                    <li className={"lg:mb-8 mb-3"}>
                                        <p className={"lg:text-xl"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-3 inline-block">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
                                            </svg>
                                            Moment
                                        </p>
                                    </li>
                                    <li className={"lg:mb-8 mb-3"}>
                                        <p className={"lg:text-xl"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-3 inline-block">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"/>
                                            </svg>
                                            Newsletter
                                        </p>
                                    </li>
                                    <li className={"lg:mb-8 lg:block hidden"}>
                                        <button style={{backgroundColor : 'rgb(29,155,240)'}} className={"rounded-full text-white font-bold lg:text-xl w-52 h-14"}>Tweet</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={"h-px w-full lg:hidden"} style={{backgroundColor : 'rgb(239,243,244)'}}>

                        </div>
                        <div className={"p-2 lg:hidden"}>
                            <div>
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
                            </div>
                        </div>
                        <div className={"h-px w-full lg:hidden"} style={{backgroundColor : 'rgb(239,243,244)'}}>

                        </div>
                        <div className={"p-2 lg:hidden"}>
                            <div>
                                <ul>
                                    <li className={"mb-3"}>
                                        <p className={"text-sm"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-3 inline-block">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"/>
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                            </svg>
                                            Settings and privacy
                                        </p>
                                    </li>
                                    <li className={"mb-3"}>
                                        <p className={"text-sm"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-3 inline-block">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"/>
                                            </svg>
                                            Help Center
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={"h-px w-full lg:hidden"} style={{backgroundColor : 'rgb(239,243,244)'}}>

                        </div>
                        <div className={"lg:text-left p-2 text-center lg:mt-40 relative"}>
                            <button onClick={() => signOut({ callbackUrl: '/' })} className={`${logout ? 'block absolute bottom-14' : 'lg:hidden'} mt-3 border font-bold border-black h-11 rounded-full lg:w-64 w-9/12`} type={"button"}>
                                Log Out
                            </button>
                            <button onClick={logoutModal} className={"hidden mt-3 h-11 lg:flex items-center gap-2 hover:bg-gray-200 p-1 rounded-full w-64"} type={"button"}>
                                <div className={`rounded-full w-[30px] h-[30px] overflow-hidden`}>
                                    <Image
                                        onClick={show}
                                        src={session.user.image}
                                        width={30}
                                        height={30}
                                    />
                                </div>
                                <div className={"flex h-full justify-between w-[80%] items-center"}>
                                    <p className={"font-bold inline-block"}>{session.user.name}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className={`min-h-fit w-[100%] lg:w-[50%] bg-blue-400 overflow-hidden`}>
                        <div className={"bg-white h-12 grid items-center p-2"}>
                            <div className={"flex gap-6"}>
                                <div className={`rounded-full w-[30px] block lg:hidden h-[30px] overflow-hidden`}>
                                    <Image
                                        onClick={show}
                                        src={session.user.image}
                                        width={30}
                                        height={30}
                                        className={"cursor-pointer"}
                                    />
                                </div>
                                <h1 className={"text-xl font-bold"}>Home</h1>
                            </div>
                        </div>
                        <div style={{borderBottom : '1px solid rgb(239,243,244)'}} className={"min-h-fit bg-white flex"}>
                            <div className={"w-[15%] flex min-h-full items-center justify-center"}>
                                <div className={`rounded-full w-[40px] h-[40px] lg:w-[48px] block lg:h-[48px] overflow-hidden`}>
                                    <Image
                                        onClick={show}
                                        src={session.user.image}
                                        width={48}
                                        height={48}
                                        className={"cursor-pointer"}
                                    />
                                </div>
                            </div>
                            <div className={"w-[85%] bg-white p-2"}>
                                <div style={{borderBottom : '1px solid rgb(239,243,244)'}}>
                                    <div>
                                        <textarea className={"w-full min-h-[50%] text-xl outline-none border-none"} placeholder={"What's Happening"}/>
                                    </div>
                                    <div className={"mt-3 pb-2"}>
                                        <button style={{color : 'rgb(29,155,240)'}} className={"font-bold hover:bg-[#E8F5FD] p-1 rounded-full"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline-block">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"/>
                                            </svg>
                                            Everyone can reply
                                        </button>
                                    </div>
                                </div>
                                <div className={"flex flex-wrap gap-1 justify-between p-1 items-center content-center"}>
                                    <div className={"flex gap-1"} style={{color: 'rgb(29,155,240)'}}>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <button style={{backgroundColor : 'rgb(29,155,240)'}} className={"text-white rounded-full p-1 w-[76px] font-bold"}>
                                            Tweet
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"bg-white overflow-y-auto h-[500px]"}>
                            <h1>500</h1>
                            <h1>500</h1>
                            <h1>500</h1>
                            <h1>500</h1>
                            <h1>500</h1>
                            <h1>500</h1>
                            <h1>500</h1>
                            <h1>500</h1>
                            <h1>500</h1>
                            <h1>500</h1>
                            <h1>500</h1>
                        </div>
                    </div>

                    <div className={"min-h-fit hidden lg:block lg:w-[25%] bg-green-400"}>

                    </div>
                </div>
            </div>
        )
    }
}

export async function getServerSideProps(context) {
    const checkAuth = await getSession(context);

    if (!checkAuth) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: { checkAuth }
    }
}

export default Home