import SubChapter from "./SubChapter";
export default function Chapter({ info }) {
  return (
    <li>
      <b>{info.Name}</b>
      <ul>
        {info.List.map((i) => (
          <SubChapter key={i.Name} info={i} />
        ))}
      </ul>
    </li>
  );
}
