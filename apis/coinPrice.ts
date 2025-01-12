import axios from "axios"

export const fetchBTCPrice = async() => {
    try {
        const response = await axios.get<IBitcoinPrice>("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
        return response.data
    } catch (error) {
        console.log(error)
    }
}
export const fetchETHPrice = async() => {
    try {
        const response = await axios.get<IEthereumPrice>("https://api.coingecko.com/api/v3/simple/price?ids=Ethereum&vs_currencies=usd")
        return response.data
    } catch (error) {
        console.log(error)
    }
}
export const fetchRLUSDPrice = async() => {
    try {
        const response = await axios.get<ITetherPrice>("https://api.coingecko.com/api/v3/simple/price?ids=Tether&vs_currencies=usd")
        return response.data
    } catch (error) {
        console.log(error)
    }
}