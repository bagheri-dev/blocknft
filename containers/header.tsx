import Logo from "@/components/UI/logo";
import Image from "next/image";

const Header = () => {
    return (
        <header className="pt-[46px]">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <Logo />
                    </div>
                    <div className="flex items-center gap-x-[53px]">
                        <nav>
                            <ul className="flex items-center text-white gap-x-[53px]">
                                <li>Company</li>
                                <li>Product</li>
                                <li>Artist</li>
                                <li>Wallet</li>
                            </ul>
                        </nav>
                        <div className="flex items-center gap-x-1">
                            <Image src={"/svg/Web.svg"} alt="web" width={24} height={24}/>
                            <p className="text-white">Eng</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;