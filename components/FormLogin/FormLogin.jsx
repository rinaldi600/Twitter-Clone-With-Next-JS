import Image from 'next/image'
import TwitterBirdLogo from '../../asset/icons/logo-twitter-png-5860.png';
import Head from "next/head";
import {signIn, signOut, useSession} from "next-auth/react";
import { useEffect } from 'react'
import GoogleIconLogo from '../../asset/icons/google.png'
import dynamic from "next/dynamic";
import {useDispatch, useSelector} from "react-redux";
import { show } from '../../store/features/modalBox';
import {useRouter} from "next/router";


function FormLogin(props) {
    const { data : session } = useSession();
    const showModal = useSelector(state => state.modalBoxForm.value);
    const dispatch = useDispatch();
    const LoginTwitter = dynamic(() => {
        return import('../Login/Login');
    });

    const style = {
        fontWeight : 900,
    };

    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700;900&display=swap"
                              rel="stylesheet"/>
            </Head>
            <div className={"bg-white h-20 grid content-center"}>
                <div className={'ml-6'}>
                    <Image
                        src={TwitterBirdLogo}
                        width={40}
                        height={40}
                    />
                </div>
            </div>
            <div className={`min-h-screen bg-white`}>
                <h1 className={"text-7xl tracking-wide mobile:text-6xl mobile:leading-[4.4rem] mobile:text-center pt-20 sm:ml-6"} style={{fontFamily: 'Roboto', fontWeight : 900}}>Sedang tren saat ini</h1>
                <h5 className={"text-3xl mobile:text-center tracking-wide mt-10 sm:ml-6"} style={{fontFamily: 'Roboto', fontWeight : 700}}>
                    Bergabunglah dengan Twitter sekarang juga.</h5>
                <div>
                    <button style={{border: '1px solid rgb(207,217,222)'}} onClick={() => signIn("google",{ callbackUrl: '/home' })} className={"hover:bg-[#E6E6E6] text-sm mobile:w-5/6 mt-10 flex gap-2 items-center justify-center bg-white h-11 p-3 ml-6 rounded-full w-80"} type={"button"}>
                        <div className={"grid max-w-full"}>
                            <Image
                                src={GoogleIconLogo}
                                width={32}
                                height={32}
                            />
                        </div>
                        Log In With Google
                    </button>
                </div>
                <div className={"ml-6 flex items-center w-80 mobile:w-5/6 justify-center mt-2 gap-2"}>
                    <div style={{backgroundColor : 'rgb(239,243,244)'}} className={"h-px w-full"}> </div>
                    <span>atau</span>
                    <div style={{backgroundColor : 'rgb(239,243,244)'}} className={"h-px w-full"}> </div>
                </div>
                <div>
                    <button style={{backgroundColor: 'rgb(29,155,240)'}} className={"hover:!bg-[#1A8CD8] font-semibold text-white text-sm mobile:w-5/6 mt-3 flex gap-2 items-center justify-center h-11 p-3 ml-6 rounded-full w-80"} type={"button"}>
                        Daftar dengan nomor telepon
                    </button>
                </div>
                <div className={"ml-6 mt-3 text-xs w-80 mobile:w-5/6"}>
                    <span style={{color: 'rgb(83,100,113)'}}>
                        Dengan mendaftar, Anda menyetujui <span className={"hover:underline"} style={{color: 'rgb(29,155,240)'}}>Persyaratan Layanan</span>dan
                        <span className={"hover:underline"} style={{color:'rgb(29,155,240)'}}> Kebijakan Privasi</span>, termasuk <span className={"hover:underline"} style={{color:'rgb(29,155,240)'}}> Penggunaan Kuki</span>.
                    </span>
                </div>
                <div className={`ml-6 mt-16 pb-2`}>
                    <p className={"text-lg font-bold"}>Sudah punya akun?</p>
                    <button onClick={() => dispatch(show())} style={{border: '1px solid rgb(207,217,222)', color: 'rgb(29,155,240)'}} className={"hover:bg-[#E8F5FD] text-sm mobile:w-5/6 mt-5 flex gap-2 font-bold items-center justify-center bg-white h-11 p-3 rounded-full w-80"} type={"button"}>
                        Masuk
                    </button>
                    { showModal ? <LoginTwitter/> : '' }
                </div>
            </div>
        </div>
    )
}

export default FormLogin;