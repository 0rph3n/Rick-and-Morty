import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getFavoritos, removeFavoritos } from "../../redux/actions";
import { useState, useEffect } from "react";

function Card({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  getFavoritos,
  removeFavoritos,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavoritos = () => {
    if (isFav) {
      setIsFav(false);
      removeFavoritos(id);
    } else setIsFav(true);
    getFavoritos({
      id,
      name,
      species,
      gender,
      image,
    });
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.tarjeta}>
      <div className={styles.botones}>
        <button
          onClick={() => {
            onClose(id);
          }}
          className={styles.cerrar}
        >
          X
        </button>
        {isFav ? (
          <button onClick={handleFavoritos} className={styles.fav}>
            ❤️
          </button>
        ) : (
          <button onClick={handleFavoritos} className={styles.fav}>
            🤍
          </button>
        )}
      </div>

      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <img src={image} alt="iamgen" className={styles.imgCard} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFavoritos: (character) => {
      dispatch(getFavoritos(character));
    },
    removeFavoritos: (id) => {
      dispatch(removeFavoritos(id));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
