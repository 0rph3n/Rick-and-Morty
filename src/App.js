import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import logo from "./assets/img/logo.png";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const username = "leandrofarnochi@gmail.com";
  const password = "123456789";

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Datos incorrectos");
    }
  };

  const onSearch = (character) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const API_KEY = "3ecc02ccfee3.83f2ebc229a9c6f147b1";

    if (characters.find((char) => char.id === character)) {
      return alert(`Este personaje ya se encuentra aqui`);
    }

    fetch(`${URL_BASE}/character/${character}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]); //no es un función flecha que recibe oldChars, sino que es cb que recibe el estado viejo y pasa a ser un array del estado viejo mas lo nuevo.
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id === id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <nav>{pathname !== "/" && <Nav onSearch={onSearch} />}</nav>
      <div>
        <img src={logo} alt="logo" width="600px" />
      </div>
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:detailId" element={<Detail />}></Route>
        <Route path="/favorites" element={<Favorites/>}></Route>
      </Routes>

      <div></div>
    </div>
  );
}

export default App;
