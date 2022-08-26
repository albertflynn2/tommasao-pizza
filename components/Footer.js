import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            King Mill Rd,
            <br /> Cork City, Co. Cork.
            <br /> (+353) 86-152-2828
          </p>
          <p className={styles.text}>
            St. Francis Street
            <br /> EnnisCorthy, Co. Wexford.
            <br /> (+353) 85-698-8080
          </p>
          <p className={styles.text}>
            O'Conner's Lane
            <br /> Ennis, Co. Clare.
            <br /> (+353) 83-635-5848
          </p>
          <p className={styles.text}>
             Foxes Terrace
            <br /> FoxFord, Co. Mayo.
            <br /> (+353) 85-454-5645
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 11:00 – 23:30
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 11:00 – 22:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
