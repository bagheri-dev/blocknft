import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="mt-[22px] overflow-hidden">
            <div className="container mx-auto">
                <div className="flex items-center gap-x-[58px]">
                    <div className="pl-14">
                        <p className="text-[#5BB8F1] mb-4">Blockchain is new Brands!</p>
                        <h1 className="text-[54px] font-bold">Make Your Crypto transaction <br /> easier</h1>
                        <div className="mt-[38px]">
                            <button className="py-4 px-[52px] rounded-2xl bg-gradient-to-r from-[#2d63d8] to-[#3048a5]">Get Sharted</button>
                        </div>
                    </div>
                    <div>
                        <Image src={"/hero.png"} alt="hero" width={683} height={683}/>
                    </div>
                </div>
            </div>
            <div className="absolute top-0">
                <Image src={"/svg/layout.svg"} alt="layout" width={500} height={500} />
            </div>
            <div className="absolute top-0 right-44">
                <Image src={"/svg/layout-center.svg"} alt="layout" width={500} height={500} />
            </div>
        </section>
    );
}

export default HeroSection;