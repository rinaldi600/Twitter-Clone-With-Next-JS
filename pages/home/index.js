import Head from 'next/head'
import {signOut, useSession, getSession} from "next-auth/react";
import React, {useEffect, useState} from "react";
import Image from 'next/image'
import TwitterBirdLogo from "../../asset/icons/logo-twitter-png-5860.png";
import Trend from "../../components/Trending/Trend";
import Tweet from "../../components/Tweet/Tweet";
import MenuNavbar from "../../components/MenuNavbar/MenuNavbar";
import MenuNavbarTwo from "../../components/MenuNavbar/MenuNavbarTwo";
import MenuNavbarThree from "../../components/MenuNavbar/MenuNavbarThree";
import WhoFollowPeople from "../../components/WhoFollowPeople/WhoFollowPeople";


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
                <div className={`min-h-screen flex`}>
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
                                <MenuNavbar/>
                            </div>
                        </div>
                        <div className={"h-px w-full lg:hidden"} style={{backgroundColor : 'rgb(239,243,244)'}}>

                        </div>
                        <div className={"p-2 lg:hidden"}>
                            <div>
                                <MenuNavbarTwo/>
                            </div>
                        </div>
                        <div className={"h-px w-full lg:hidden"} style={{backgroundColor : 'rgb(239,243,244)'}}>

                        </div>
                        <div className={"p-2 lg:hidden"}>
                            <div>
                                <MenuNavbarThree/>
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

                    <div className={`min-h-fit w-[100%] lg:w-[50%] overflow-hidden`}>
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
                            <Tweet image={session.user.image}/>
                            <Tweet image={session.user.image}/>
                            <Tweet image={session.user.image}/>
                            <Tweet image={session.user.image}/>
                            <Tweet image={session.user.image}/>
                            <Tweet image={session.user.image}/>
                        </div>
                    </div>

                    <div className={"min-h-fit hidden lg:block lg:w-[25%] bg-white"}>
                        <div className={"min-h-full w-[90%] mx-auto bg-white pt-1"}>
                            <div className={"h-[50px] rounded-full flex overflow-hidden items-center bg-[#EFF3F4]"}>
                                <div className={"w-[15%] flex justify-center"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-[#566774]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                                    </svg>
                                </div>
                                <input className={"w-[85%] bg-[#EFF3F4] outline-none border-none text-sm text-[#566774]"} type="text" placeholder={"Search Twitter"}/>
                            </div>
                            <div className={"mt-3 overflow-hidden"} style={{borderTop : '1px solid rgb(239,243,244)'}}>
                                <div className={"h-[450px] overflow-y-scroll bg-[#EFF3F4] rounded-[20px] pt-3"}>
                                    <p className={"font-extrabold text-xl pl-3"}>Trends for you</p>
                                    <Trend/>
                                    <Trend/>
                                    <Trend/>
                                    <Trend/>
                                    <Trend/>
                                    <Trend/>
                                    <Trend/>
                                    <Trend/>
                                    <Trend/>
                                </div>
                            </div>
                            <div className={"h-[150px] mt-3 overflow-y-scroll bg-[#EFF3F4] rounded-[20px] pt-3"}>
                                <p className={"font-extrabold text-xl pl-3"}>Who to Follow</p>
                                <WhoFollowPeople image={session.user.image}/>
                                <WhoFollowPeople image={session.user.image}/>
                            </div>
                        </div>
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