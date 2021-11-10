import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>Neel 07 CREATIVES.</h1>
        <h1 className={styles.linkTitle}>
          <button className={styles.button}>
            <Link href="/contact" className={styles.link}>
              <div className={styles.linkTag}>
                <span className={styles.linkText}>WORK WITH US</span>
                <Image
                  src={"/img/link.png"}
                  width="30px"
                  height="27px"
                  alt=""
                />
              </div>
            </Link>
          </button>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          45 ADAM STREET,
          <br /> USA
        </div>
        <div className={styles.cardItem}>
          CONTACT@LAMA.DEV
          <br /> 111_438_5244
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLLOW US:
          <br /> __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
          © 2022 LAMA INTERACTIVE,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
