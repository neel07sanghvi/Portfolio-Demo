import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";
import Link from "next/link";

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
      <Circle backgroundColor="#01c686" right="-40vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}> Neel 07 </span> Digital Product Agency
        </h1>
        <p className={styles.desc}> DESCRIPTION </p>
        <button className={styles.button}>
          <Link href="/products/design"> DISCOVER </Link>
        </button>
      </div>
      <div className={styles.card}>
        {" "}
        <Image
          src="/img/Avocado.png"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="cover"
          alt=""
        />{" "}
      </div>
    </div>
  );
};

export default Intro;
