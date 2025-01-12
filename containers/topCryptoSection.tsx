"use client"
import { fetchBTCPrice, fetchETHPrice, fetchRLUSDPrice } from "@/apis/coinPrice";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const TopCryptoSection = () => {
    const { data } = useQuery({ queryKey: ['btcPrice'], queryFn: async () => await fetchBTCPrice(), initialData: { bitcoin: { usd: 0 } } })
    const { data: eth } = useQuery({
        queryKey: ['ethPrice'],
        queryFn: async () => await fetchETHPrice(),
        initialData: { ethereum: { usd: 0 } }
    })
    const { data: rlusd } = useQuery({ queryKey: ['rlusdPrice'], queryFn: async () => await fetchRLUSDPrice(), initialData: { tether: { usd: 0 } } })
    return (
        <section className="mt-20">
            <div className="container mx-auto">
                <div className="mb-12">
                    <h2 className="text-4xl text-center mb-[18px]">Top Crypto Now</h2>
                    <p className="text-center text-[#A9A9A9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed viverra faucibus ac imperdiet pellentesque. Sit purus augue arcu quam orci. Et tortor, gravida libero et amet. Pretium commodo, odio viverra mauris vitae sisl congue bibendume. Lorem scelerisque volutpat aliquam convallis tellus nunc, molestie.</p>
                </div>
                <div className="grid grid-cols-3 justify-items-center">
                    <div className="w-[348px] bg-box rounded-3xl px-[84px] py-12">
                        <div className="flex flex-col justify-center items-center">
                            <span className="bg-[#3E3E3E] py-[27px] px-8 mb-[30px] rounded-[18px]">
                                <Image src={"/svg/btc.svg"} alt={"btc"} width={25} height={35} />
                            </span>
                        </div>
                        <h3 className="text-2xl text-center mb-[7px]">Bitcoin</h3>
                        <p className="text-[#60AEF0] text-2xl mb-[43px] text-center">{data?.bitcoin.usd.toLocaleString()} USD</p>
                        <div>
                            <Image src={"/svg/chart-btc.svg"} alt="chart" width={180} height={105} />
                        </div>
                        <div className="flex justify-center">
                            <button className="flex items-center gap-x-1.5">Learn More <FaArrowRightLong /></button>
                        </div>
                    </div>
                    <div className="w-[348px] bg-box rounded-3xl px-[84px] py-12">
                        <div className="flex flex-col justify-center items-center">
                            <span className="bg-[#3E3E3E] py-[27px] px-8 mb-[30px] rounded-[18px]">
                                <Image src={"/svg/eth.svg"} alt={"btc"} width={25} height={35} />
                            </span>
                        </div>
                        <h3 className="text-2xl text-center mb-[7px]">Ethereum</h3>
                        <p className="text-[#60AEF0] text-2xl mb-[43px] text-center">{eth?.ethereum.usd.toLocaleString()} USD</p>
                        <div>
                            <Image src={"/svg/chart-eth.svg"} alt="chart" width={180} height={105} />
                        </div>
                        <div className="flex justify-center">
                            <button className="flex items-center gap-x-1.5">Learn More <FaArrowRightLong /></button>
                        </div>
                    </div>
                    <div className="w-[348px] bg-box rounded-3xl px-[84px] py-12">
                        <div className="flex flex-col justify-center items-center">
                            <span className="bg-[#3E3E3E] py-[27px] px-8 mb-[30px] rounded-[18px]">
                                <Image src={"/svg/ripple.svg"} alt={"btc"} width={25} height={35} />
                            </span>
                        </div>
                        <h3 className="text-2xl text-center mb-[7px]">Ripple</h3>
                        <p className="text-[#60AEF0] text-2xl mb-[43px] text-center">{rlusd?.tether.usd.toLocaleString()} USD</p>
                        <div>
                            <Image src={"/svg/chart-ripple.svg"} alt="chart" width={180} height={105} />
                        </div>
                        <div className="flex justify-center">
                            <button className="flex items-center gap-x-1.5">Learn More <FaArrowRightLong /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-44">
                <Image src={"/svg/layout-center.svg"} alt="layout" width={500} height={500} />
            </div>
            <div className="absolute top-0">
                <Image src={"/svg/layout.svg"} alt="layout" width={500} height={500} />
            </div>
        </section>
    );
}

export default TopCryptoSection;