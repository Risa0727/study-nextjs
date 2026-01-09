import Image from "next/image";
import Headline from "./components/Headline";
import styles from "./styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.content}>
          <Headline title="Home page" page="Home" />
        </div>
        <div className={styles.buttons}>
          <a
            className={styles.buttonPrimary}
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className={styles.buttonSecondary}
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
