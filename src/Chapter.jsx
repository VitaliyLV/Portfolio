export default function Chapter({ info }) {
  return (
    <div className="card-body chapter">
      <h6 className="card-title">
        <a
          href={`${info.Value}`}
          className="link-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          {info.Name}
        </a>
      </h6>
      <p className="card-text">{info.Description}</p>
    </div>
  );
}
