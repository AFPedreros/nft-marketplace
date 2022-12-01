const Moralis = require("moralis").default
require("dotenv").config()
const contractAddresses = require("./constants/networkMapping.json")

let chainId = process.env.chainId || 31337
const MORALIS_API_KEY = process.env.MORALIS_API_KEY
const contractAddress = contractAddresses[chainId]["NftMarketplace"][0]

const appId = process.env.NEXT_PUBLIC_APPLICATION_ID
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL

// 	0x1

async function main() {
    console.log(`Working with contract address: ${contractAddress}`)
    await Moralis.start({
        apiKey: MORALIS_API_KEY,
        // ...and any other configuration
    })

    const address = "0xd4e4078ca3495DE5B1d4dB434BEbc5a986197782"
    const chain = "0x1"

    const response = await Moralis.EvmApi.events.getContractLogs({
        address,
        chain,
    })

    console.log(response.toJSON())
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
