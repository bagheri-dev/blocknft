import Image from "next/image";

const BrandSection = () => {
    return (
        <section className="bg-[#eeeeee]/10 py-11">
            <div className="container mx-auto">
                <div className="flex justify-center items-center gap-x-[129px]">
                    <Image src={"/irafficx.png"} alt="irafficx" width={150} height={43} />
                    <Image src={"/AKSPRODUCT.png"} alt="AKSPRODUCT" width={190} height={48} />
                    <Image src={"/adbos.png"} alt="adbos" width={147} height={40} />
                    <Image src={"/CoinBade.png"} alt="CoinBade" width={152} height={44} />
                </div>
            </div>
        </section>
    );
}

export default BrandSection;