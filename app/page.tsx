import Translator from "@/components/Translator";
import * as styles from "./page.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.leftSection}>
            <Image src="/logo.png" alt="Dedego Logo" width={120} height={40} />
            <div className={styles.divider}>|</div>
            <h1 className={styles.title}>판교어 번역기</h1>
          </div>
          <Link href="/about" className={styles.about}>
            데데고 소개
          </Link>
        </div>
      </header>
      <main className={styles.main}>
        <Translator />
      </main>
    </div>
  );
}
