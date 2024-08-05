import HomeImage from "@/components/Home/HomeImage";
import styles from "./page.module.css";
import HomeCities from "@/components/Home/HomeCities";
import HomeOffer from "@/components/Home/HomeOffer";
import HomeFeatures from "@/components/Home/HomeFeatures";

export default function Home() {
    return (
        <main className={styles.main}>
            <HomeImage />
            <HomeCities />
            <HomeOffer />
            <HomeFeatures />
        </main>
    );
}
