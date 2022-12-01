import { ConnectButton } from "web3uikit"
import Link from "next/link"

export default function Header() {
    return (
        <nav className="flex justify-between px-6 items-center border-b-2">
            <h1 className="p-4 text-3xl font-bold">NFT Marketplace</h1>
            <div className="">
                <Link className="hover:border-b-2 py-1 mx-2" href="/">
                    Home
                </Link>
                <Link className="hover:border-b-2 py-1 mx-2" href="/sell-nft">
                    Sell NFT
                </Link>
            </div>
            <ConnectButton moralisAuth={false} />
        </nav>
    )
}
