import "../styles/globals.css"
import Head from "next/head"
import { MoralisProvider } from "react-moralis"
import Header from "../components/Header"

const APPLICATION_ID = process.env.NEXT_PUBLIC_APPLICATION_ID
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>NFT MarketPlace</title>
                <meta name="description" content="Nft Marketplace" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoralisProvider appId={APPLICATION_ID} serverUrl={SERVER_URL}>
                <Header />
                <Component {...pageProps} />
            </MoralisProvider>
        </div>
    )
}

export default MyApp
