import "./menu.scss";
import { Link } from "react-router-dom";

const Menu = (props) => {
  const onClick = props.onClick;

  const menuItems = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  const menu = menuItems.map((item, idx) => {
    return (
      <div key={item} className="container_menu">
        <Link
          className="name"
          data-id={item}
          to={`/news/page/${item}`}
          onClick={() => {
            onClick(item);
          }}
        >
          {item}
        </Link>

        <hr></hr>
      </div>
    );
  });

  return <>{menu}</>;
};

export default Menu;
