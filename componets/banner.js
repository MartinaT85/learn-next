import styles from "../styles/Banner.module.css";

const Banner = (props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.titleWhite}>Coffee</span>
        <span className={styles.titleColor}> Connoisseur</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee shops</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={props.handleOnClick}>
          {props.buttonText}
        </button>
      </div>
    </header>
  );
};

export default Banner;
