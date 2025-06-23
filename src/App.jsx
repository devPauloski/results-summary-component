import "./App.css";
import data from "../public/data.json";

const Result = () => {
  return (
    <section className="result-section">
      <h1>Your Result</h1>
      <p>
        <span>76</span>
        of 100
      </p>
      <p>Great</p>
      <p>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </section>
  );
};

const Summary = () => {
  return (
    <section className="summary-section">
      <h2>Summary</h2>
      <ResultList />
      <button>Continue</button>
    </section>
  );
};

const ResultList = () => {
  const listItems = data.map((item) => {
    return (
      <li key={item.id}>
        <img src={item.icon} alt="" />
        <p>{item.category}</p>
        <p>
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
