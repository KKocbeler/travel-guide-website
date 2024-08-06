import HomeImage from "@/components/Home/HomeImage";
import styles from "./page.module.css";
import HomeCities from "@/components/Home/HomeCities";
import HomeOffer from "@/components/Home/HomeOffer";
import HomeFeatures from "@/components/Home/HomeFeatures";
import HomePopular from "@/components/Home/HomePopular";
import HomeGalleryCard from "@/components/Home/HomeGalleryCard";

export default function Home() {
    return (
        <main className={styles.main}>
            <HomeImage />
            <HomeCities />
            <HomeOffer />
            <HomeFeatures />
            <HomePopular />
            <HomeGalleryCard />
        </main>
    );
}
