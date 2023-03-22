import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const API_KEY = "3ecc02ccfee3.83f2ebc229a9c6f147b1";

    axios(`${URL_BASE}/character/${detailId}?key=${API_KEY}`).then((response) =>
      setCharacter(response.data)
    );
  }, []);

  return (
    <div>
      {character.name ? (
        <div>
          <h2>{character.name}</h2>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.origin?.name}</p>
          <img src={character.image} alt="imagen" />
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
