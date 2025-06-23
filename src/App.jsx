import "./App.css";
import data from "../public/data.json";

const Result = () => {
  return (
    <section className="result-section">
      <h1 className="result-title">Your Result</h1>
      <p className="result-score">
        <span>76</span>of 100
      </p>
      <p className="result-grade">Great</p>
      <p className="result-description">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </section>
  );
};

const Summary = () => {
  return (
    <section className="summary-section">
      <h2 className="summary-title">Summary</h2>
      <ResultList />
      <button type="button">Continue</button>
    </section>
  );
};

const ResultList = () => {
  const listItems = data.map((item) => {
    return (
      <li key={item.id} className="summary-category-item">
        <img className="summary-category-icon" src={item.icon} alt="" />
        <p className="summary-category-name">{item.category}</p>
        <p className="summary-category-score">
          <span>{item.score}</span>
        </p>
      </li>
    );
  });

  return (
    <ul role="list">
      {listItems}
    </ul>
  );
};

const App = () => {
  return (
    <main className="wrapper">
      <Result />
      <Summary />
    </main>
  );
};

export default App;
