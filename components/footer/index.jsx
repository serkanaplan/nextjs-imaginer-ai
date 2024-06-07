import Link from "next/link";

//svg dosyalarını img etiketleri ile yüklersen svg özelliğini kaybeder oyuzden bu şekilde çağırıp kullan ki svg özelliğini korusun
//bunun için next.config.mjs dosyasında şu konfigürasyonu yap
// webpack(config) {
//   config.module.rules.push({
//     test: /\.svg$/i,
//     use: ["@svgr/webpack"],
//   });
import GithubIcon from "@/assets/icons/github.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";

import styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="https://github.com/serkanaplan" >
        <GithubIcon />
      </Link>
      <Link href="https://twitter.com/" >
        <TwitterIcon />
      </Link>
      <p>
        Made by <b>Mehmet Pekcan</b>
        <br />
        and, built with <b>Next.js</b>
      </p>
    </footer>
  );
}

export { Footer };