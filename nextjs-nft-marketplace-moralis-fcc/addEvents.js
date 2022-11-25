const Moralis = require("moralis/node")
require("dotenv").config()
const contractAddresses = require("./constants/networkMapping.json")

let chainId = process.env.chainId || 31337
const contractAddress = contractAddresses[chainId]["NftMarketplace"][0]

const APPLICATION_ID = process.env.NEXT_PUBLIC_APPLICATION_ID
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

async function main() {}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
