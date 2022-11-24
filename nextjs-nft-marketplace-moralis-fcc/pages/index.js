import styles from "../styles/Home.module.css"
import { useMoralis } from "react-moralis"

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
