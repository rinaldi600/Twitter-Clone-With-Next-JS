import HeadComponent from "../components/Head/HeadComponent";
import TwitterBackground from "../asset/img/lohp_1302x955.png";
import TwitterBirdLogo from "../asset/icons/twitter-icon-svg-28.jpg"
import Image from 'next/image'
import FormLogin from "../components/FormLogin/FormLogin";

function HomePage() {
    const horizontalDisplay = {
        display : 'inline-block',
        margin : '5px',
        color : 'rgb(83,100,113)'
    };

    return (
        <div>
            <div className={"min-h-screen bg-yellow-400"}>
                <HeadComponent/>
                <div className="min-h-screen flex lg:flex-row flex-col-reverse">

                    <div className={"w-full lg:w-[40%] lg:min-h-fit min-h-[50vh] bg-blue-100 relative"}>
                        <div className={'lg:relative lg:w-full lg:h-full'}>
                            <Image
                                src={TwitterBackground}
                                layout='fill'
                                objectFit={'cover'}
                            />
                        </div>
                        <div className={"absolute z-50 inset-0 grid justify-items-center content-center"}>
                            <div className={"w-[40%] lg:w-[50%] relative"}>
                                <Image
                                    src={TwitterBirdLogo}
                                    objectFit={'cover'}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={"w-full lg:w-[60%] lg:min-h-fit min-h-screen bg-red-100"}>
                        <FormLogin/>
                    </div>

                </div>

                <div style={{fontFamily : 'Segoe UI'}} className="bg-white">
                    <ul className={"text-sm text-center"}>
                        <li style={horizontalDisplay}>
                            <span>Tentang</span>
                        </li>
                        <li style={horizontalDisplay}>
                            <span>Pusat Bantuan</span>
                        </li>
                        <li style={horizontalDisplay}>
                            <span>Persyaratan Layanan</span>
                        </li>
                        <li style={horizontalDisplay}>
                            <span>Kebijakan Privasi</span>
                        </li>
                        <li style={horizontalDisplay}>
                            <span>Kebijakan Penggunaan Kuki</span>
                        </li>
                        <li style={horizontalDisplay}>
                            <span>Aksesibilitas</span>
                        </li>
                        <li style={horizontalDisplay}>
                            <span>Informasi iklan</span>
                        </li>
                        <li style={horizontalDisplay}>
                            <span>Blog</span>
                        </li>
                        <li style={horizontalDisplay}>
                            <span>Status</span>
                        </li>
                        <li style={horizontalDisplay}>
                            <span>Karier</span>
                        </li>
                        <li style={horizontalDisplay}>
                            <span>Sumber Daya Merek</span>
                        </li>
                        <li style={horizontalDisplay}>
                            <span>Periklanan</span>
                        </li>
                        <li style={horizontalDisplay}>
                            <span>Pemasaran</span>
                        </li>
                        <li style={horizontalDisplay}>
                            <span>Twitter untuk Bisnis</span>
                        </li>
                        <li style={horizontalDisplay}>
                            <span>Pengembang</span>
                        </li>
                        <li style={horizontalDisplay}>
                            <span>Direktori</span>
                        </li>
                        <li style={horizontalDisplay}>
                            <span>Pengaturan</span>
                        </li>
                        <li style={horizontalDisplay}>
                            <span>&copy; 2022 Twitter, Inc.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomePage
