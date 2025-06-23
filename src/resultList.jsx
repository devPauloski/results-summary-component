import data from "../public/data.json";

const ResultList = () => {
  const listItems = data.map((item) => {
    return (
      <li 
        key={item.id} 
        className="summary-category-item"
        style={{
          backgroundColor: `${item.backgroundColor}`,
          color: `${item.color}`
        }}
      >
        <img className="summary-category-icon" src={item.icon} alt="" />
        <p className="summary-category-name">{item.category}</p>
        <p className="summary-category-score">
          <span>{item.score}</span><span>/ 100</span> 
        </p>
      </li>
    );
  });

  return (
    <ul role="list" className="summary-category-list">
      {listItems}
    </ul>
  );
};

export default ResultList;