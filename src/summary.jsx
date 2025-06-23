import ResultList from "./resultList.jsx";

const Summary = () => {
  return (
    <section className="summary-section">
      <h2 className="summary-title">Summary</h2>
      <ResultList />
      <button className="button" type="button">Continue</button>
    </section>
  );
};

export default Summary;