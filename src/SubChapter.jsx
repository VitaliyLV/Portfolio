import "./SubChapter.css";

export default function SubChapter({ info }) {
  return (
    <li>
      <a href={`${info.Value}`}>{info.Name}</a>
    </li>
  );
}
