import styles from "../styles/Home.module.css"
import { useMoralis } from "react-moralis"

// NFT Marketplace address 0x91E67acD8BbdFCDE151fA1A18dbf37588823dfB2
// Basic NFT address 0xDd580e470A2c38f61a4f2ef3Ab48A4cFb1EBB9CC

export default function Home() {
    const { Moralis } = useMoralis()

    async function test() {
        console.log("Clicked!")
        const Food = Moralis.Object.extend("Food")

        const food = new Food()
        food.set("food", "pizza")
        food.set("ethAddress", "0x0")

        await food.save()
    }

    return (
        <div className={styles.container}>
            <button onClick={test}>Test</button>
        </div>
    )
}
