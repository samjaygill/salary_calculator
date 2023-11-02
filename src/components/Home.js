import AnnualCalculator from "./AnnualCalculator";
import Header from "./Header";
import HourlySalary from "./HourlySalary";
import "./css/Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="card">
          <AnnualCalculator />
        </div>
        <div className="card">
          <HourlySalary />
        </div>
      </div>
    </>
  );
};

export default Home;
