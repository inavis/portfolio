import "./SectionTitle.css";

function SectionTitle({ mainText, subText, type }) {
  return (
    <div className={`section-title ${type === "1" ? "type1" : "type2"}`}>
      <h1 className="w-100">{mainText}</h1>
      <p className="w-100">{subText}</p>
    </div>
  );
}

export default SectionTitle;
