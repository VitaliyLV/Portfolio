import IconTravel from "./assets/icons/IconTravel";
import IconFileCode from "./assets/icons/IconCode";
import IconBrowser from "./assets/icons/IconProject";
import IconCertificate from "./assets/icons/IconCertificate";
import IconContactsOutline from "./assets/icons/IconAbout";

export default function Tab({ info, selected, isSelected }) {
  let Icon = null;
  switch (info.Icon) {
    case "IconTravel":
      Icon = IconTravel;
      break;
    case "IconCode":
      Icon = IconFileCode;
      break;
    case "IconProject":
      Icon = IconBrowser;
      break;
    case "IconCertificate":
      Icon = IconCertificate;
      break;
    case "IconAbout":
      Icon = IconContactsOutline;
      break;
  }

  return (
    <li className="nav-item">
      <button
        className={`nav-link ${isSelected && "active"} icon-button`}
        onClick={selected}
      >
        {Icon && (
          <span className="button-icon">
            {" "}
            <Icon />
          </span>
        )}
        <span>{info.Name}</span>
      </button>
    </li>
  );
}
