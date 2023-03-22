import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav({ onSearch }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/home">home</Link>
      <Link to="/about">About</Link>
      <Link to="/detail/:detailId">Details</Link>
      <Link to="/favorites">Favorites</Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
