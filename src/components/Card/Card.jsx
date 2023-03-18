import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ id, name, species, gender, image, onClose }) {
  return (
    <div className={styles.tarjeta}>
      <button
        onClick={() => {
          onClose(id);
        }}
        className={styles.cerrar}
      >
        X
      </button>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <img src={image} alt="iamgen" className={styles.imgCard} />
    </div>
  );
}
