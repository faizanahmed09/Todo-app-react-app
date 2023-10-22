import axios from "axios";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [bgColor, setBgColor] = useState("");
  const [errorMsg, setErrorMsg] = useState(null); // Track error messages

  async function changeColor() {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/color`);
      
      if (res?.data?.color) {
        setBgColor(`#${res.data.color}`);
        setErrorMsg(null); 
      } else {
        setErrorMsg("Failed to fetch color from the server.");
      }
    } catch (error) {
      setErrorMsg("An error occurred while fetching the color. Please try again later.");
    }
  }

  return (
    <div className="app" style={{ backgroundColor: bgColor }}> 
      <div className="mainHeading">
        <div className="heading">
          <h1>Color App</h1>
          <h2>click to change color </h2>

          {errorMsg && <div className="errorNotification">{errorMsg}</div>}

          <hr />
          <button className="colorChangeBtn" onClick={changeColor}>
            {/* <AiOutlineSync size={50}/> */}Change Color
          </button>
        </div>
      </div>
    </div>
  );
}
