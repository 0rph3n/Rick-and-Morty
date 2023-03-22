import styles from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [character, setCharacter] = useState("");

  const handleChange = (event) => {
    setCharacter(event.target.value);
  };
  
  return (
    <div className={styles.container}>
      <input type="search" onChange={handleChange} className={styles.search} />
      <button
        onClick={() => {
          onSearch(character);
        }}
        className={styles.butonSearch}
      >
        Agregar
      </button>
    </div>
  );
}
