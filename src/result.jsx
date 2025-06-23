const Result = () => {
  return (
    <section className="result-section">
      <h1 className="result-title">Your Result</h1>
      <p className="result-score">
        <span>76</span><br/><span>of 100</span>
      </p>
      <p className="result-grade">Great</p>
      <p className="result-description">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </section>
  );
};

export default Result;