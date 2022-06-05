import Image from "next/image";
import styles from "./loading.module.css";
import LoadingImage from "../../public/chytboat_logo.png";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <Image
        src={LoadingImage}
        className={styles.loadingImg}
        alt="loading image for chyboat"
        height={200}
        width={200}
      />
    </div>
  );
}
