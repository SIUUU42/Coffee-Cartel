import { useState, useEffect } from "react";
import "./App.css";


//Method for the app
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menu, setMenu] = useState([]);

  //UseEffect hook to fetch the menu data from the JSON file when the component mounts
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  //Dark and light mode toggles and menu display
  return (
    <div className={darkMode ? "dark" : "light"}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <h1>Local Coffee Shop</h1>

      {menu.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;