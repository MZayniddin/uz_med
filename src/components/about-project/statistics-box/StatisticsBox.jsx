import "./StatisticsBox.scss";

const StatisticsBox = ({ label, content }) => {
  return (
    <div className="statistics-box">
      <p>{content}</p>
      <span>{label}</span>
    </div>
  );
};

export default StatisticsBox;
