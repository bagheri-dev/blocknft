import Image from "next/image";

const Logo = () => {
    return ( 
        <div className="flex items-center gap-x-2.5">
            <Image src={"/logo.svg"} alt="logo" width={40} height={30} />
            <p className="text-2xl text-white">Block<span className="text-primary">NFT</span></p>
        </div>
     );
}
 
export default Logo;