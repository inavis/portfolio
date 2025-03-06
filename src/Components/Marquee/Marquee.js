import "./Marquee.css";

function Marquee({ content }) {
  return (
    <div className="marquee">
      <div className={`move`}>
        {/* adding text multiple times to have certain length so that text in marquee looks continuous */}
        {content}
        {content}
        {content}
        {content}
        {content}
        {content}
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
}

export default Marquee;
