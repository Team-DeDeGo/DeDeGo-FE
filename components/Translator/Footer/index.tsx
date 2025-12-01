"use client";

import * as styles from "./style.css";
import Image from "next/image";

interface TranslatorFooterProps {
  isPending: boolean;
  hasTranslation: boolean;
  onTranslate: () => void;
  onCopy: () => void;
}

export const TranslatorFooter = ({
  isPending,
  hasTranslation,
  onTranslate,
  onCopy,
}: TranslatorFooterProps) => {
  return (
    <div className={styles.footer}>
      <button
        className={styles.translateButton}
        onClick={onTranslate}
        disabled={isPending}
      >
        {isPending ? "번역 중..." : "번역하기"}
      </button>
      <div className={styles.iconButtons}>
        <a
          href="https://github.com/Team-DeDeGo/DeDeGo-FE"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconButton}
        >
          <Image src="/github.png" alt="GitHub" width={25} height={25} />
        </a>
        <button
          className={styles.iconButton}
          onClick={onCopy}
          disabled={isPending || !hasTranslation}
          aria-label="번역 결과 복사"
        >
          <Image src="/copy.png" alt="Copy" width={25} height={25} />
        </button>
      </div>
    </div>
  );
};
