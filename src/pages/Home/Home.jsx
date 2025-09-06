import Clock from "../../components/Clock/Clock";
import "./Home.css";

function Home() {
  return (
    <div className="home-container d-flex flex-column justify-content-center align-items-center">
      <h1 className="home-title">Restoran İdarə Sisteminə Xoş Gəldiniz 🍽️</h1>
      <Clock />
    </div>
  );
}

export default Home;
