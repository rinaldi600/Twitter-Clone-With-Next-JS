import Image from "next/image";
import TwitterBirdLogo from '../../asset/icons/logo-twitter-png-5860.png';
import {signIn} from "next-auth/react";
import GoogleIconLogo from "../../asset/icons/google.png";
import {useDispatch, useSelector} from "react-redux";
import { close } from '../../store/features/modalBox';

function Login() {

    const showModal = useSelector(state => state.modalBoxForm.value);
    const dispatch = useDispatch();

    return (
        <div className={`fixed ${!showModal ? 'hidden' : '' } top-[0] left-[0] overflow-auto w-full h-full grid sm:content-center z-50 mx-auto bg-zinc-700/75`}>
            <div className={"sm:w-[600px] w-full bg-white h-full sm:h-[600px] sm:mx-auto pt-1 sm:rounded-lg overflow-hidden"}>
                <div className={"h-[50px] flex items-center w-full"}>
                    <svg onClick={() => dispatch(close())} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer ml-2" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    <div className={"mx-auto"}>
                        <Image
                            src={TwitterBirdLogo}
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
                <div className={"h-full"}>
                    <div className={"w-[70%] mx-auto h-full"}>
                        <h1 className={"text-center text-3xl font-bold"}>Masuk ke Twitter</h1>
                        <div className={"grid justify-center"}>
                            <button style={{border: '1px solid rgb(207,217,222)'}} onClick={() => signIn("google")} className={"hover:bg-[#E6E6E6] text-sm mobile:w-9/6 mt-10 flex gap-2 items-center justify-center bg-white h-11 p-3 rounded-full lg:w-80"} type={"button"}>
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
                        <div className={"grid justify-center"}>
                            <div className={"flex items-center w-80 mobile:w-5/6 justify-center mt-2 gap-2"}>
                                <div style={{backgroundColor : 'rgb(207,217,222)'}} className={"h-px w-full"}> </div>
                                <span>atau</span>
                                <div style={{backgroundColor : 'rgb(207,217,222)'}} className={"h-px w-full"}> </div>
                            </div>
                        </div>
                        <div className={"grid lg:w-80 h-14 mx-auto mt-3"}>
                            <input placeholder={"Nomor telepon, email"} className={"w-full h-full p-2 rounded-md"} style={{border:"1px solid rgb(207,217,222)"}} type="text"/>
                        </div>
                        <div className={"grid justify-center"}>
                            <button style={{backgroundColor : 'rgb(15,20,25)'}} className={"hover:bg-[#E6E6E6] font-bold text-sm mobile:w-9/6 mt-3 flex gap-2 items-center text-white justify-center bg-white h-11 p-3 rounded-full w-80"} type={"button"}>
                                Berikutnya
                            </button>
                        </div>
                        <div className={"grid justify-center"}>
                            <button style={{border: '1px solid rgb(207,217,222)'}} className={"hover:bg-[#E6E6E6] font-bold text-sm mobile:w-9/6 mt-3 flex gap-2 items-center justify-center bg-white h-11 p-3 rounded-full w-80"} type={"button"}>
                                Lupa Kata Sandi
                            </button>
                        </div>
                        <div className={"mx-auto w-80 mt-16"}>
                            <p><span style={{color: 'rgb(83,100,113)'}}>Belum punya akun?</span> <a style={{color : 'rgb(56,167,242)'}} href="#">Daftar</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;