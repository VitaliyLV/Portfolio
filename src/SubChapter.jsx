import "./SubChapter.css";

export default function SubChapter({ info }) {
  return (
    <li>
      <a href={`${info.Value}`} target="_blank" rel="noopener noreferrer">
        {info.Name}
      </a>
    </li>
  );
}
