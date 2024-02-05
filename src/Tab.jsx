export default function Tab({ info, selected, isSelected }) {
  return (
    <li className="nav-item">
      <button
        className={`nav-link ${isSelected && "active"}`}
        onClick={selected}
      >
        {info.Name}
      </button>
    </li>
  );
}
