"use client";

import * as styles from "./style.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.leftSection}>
          <Image
            src="/logo-black.png"
            alt="Dedego Logo"
            width={120}
            height={30}
          />
          <div className={styles.divider}>|</div>
          <h1 className={styles.title}>판교어 번역기</h1>
        </div>
        <Link href="/about" className={styles.about} target="_blank">
          데데고 소개
        </Link>
      </div>
    </header>
  );
}
