import Link from "next/link";
import * as styles from "./style.css";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src="/logo-white.png"
          alt="Dedego Logo"
          width={120}
          height={30}
        />
      </header>
      <main className={styles.contentSection}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.mainTitle}>
            회사.팀플.스터디.모든 일상에서 쉽고 빠르게 <br /> 판교어 번역이 되는
            AI
          </h1>
          <Image src="/icons.png" alt="Dedego icons" width={515} height={362} className={styles.icon}/>
        </div>
        <div className={styles.aboutWrapper}>
          <h2 className={styles.sectionTitle}>데데고는 이렇게 만들어졌어요.</h2>
          <div className={styles.processFlow}>
            <div className={styles.processBox}>클라이언트 요청</div>
            <span className={styles.arrow}>&gt;</span>
            <div className={styles.processBox}>JSON 파싱</div>
            <span className={styles.arrow}>&gt;</span>
            <div className={styles.processBox}>Gemini API 호출</div>
            <span className={styles.arrow}>&gt;</span>
            <div className={styles.processBox}>응답 파싱</div>
            <span className={styles.arrow}>&gt;</span>
            <div className={styles.processBox}>클라이언트 전달</div>
          </div>
          <p className={styles.description}>
            사용자의 요청을 JSON으로 변환하여 Gemini API에 전달하고,
            <br />
            받은 응답을 다시 JSON으로 파싱하여 클라이언트에게 반환합니다.
          </p>
        </div>
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>
            판교 용어가 어렵다면 데데고에게 물어보세요.
          </h2>
          <p className={styles.ctaDescription}>
            데데고는 판교 전문 용어가 어려운 주니어 개발자들에게 필요한 AI 번역
            서비스입니다.
          </p>
          <Link href={"/"} className={styles.ctaButton} target="_blank">시작하기</Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <Image
              src="/logo-white.png"
              alt="Dedego Logo"
              width={100}
              height={25}
            />
            <p className={styles.footerCopyright}>
              © 2025 Dedego. All rights reserved.
            </p>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>Dev</h3>
              <a
                href="https://github.com/806gw"
                className={styles.footerLink}
                target="_blank"
              >
                Hongje Seong
              </a>
              <a
                href="https://github.com/dya-only"
                className={styles.footerLink}
                target="_blank"
              >
                Boseok Son
              </a>
            </div>
            <div className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>Github</h3>
              <a
                href="https://github.com/Team-DeDeGo/DeDeGo-FE"
                className={styles.footerLink}
                target="_blank"
              >
                Client
              </a>
              <a
                href="https://github.com/Team-DeDeGo/DeDeGo-BE"
                className={styles.footerLink}
                target="_blank"
              >
                Server
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
