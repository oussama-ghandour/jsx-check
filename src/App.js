
import './App.css';
import image1 from "./images/pic1.png";
import image2 from "./images/pic2.png";
import video1 from "./video/short-video.mp4";
import "./css/style.css"
function App() {
  return (
    <div className="App">
      <div className="Col">
        <h1 className="text1">Your name here</h1>
        <br />
        <div className="imag">
          <img src={image1} alt="image1" />
          <br />
          <img src={image2} alt="image2" />
        </div>
      </div>
      <div className="vid">
        <video width="320" height="240" controls>
          <source src={video1} />
        </video>
      </div>
    </div>
  );
}

export default App
