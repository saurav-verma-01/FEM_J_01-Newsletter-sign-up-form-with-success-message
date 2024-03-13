import listIcon from "../assets/icon-list.svg";

const ListItem = ({ children }) => {
  return (
    <li className="list-item">
      <img src={listIcon} alt="list icon" className="list-icon" />
      <span className="list-text">{children}</span>
    </li>
  );
};

export default ListItem;
