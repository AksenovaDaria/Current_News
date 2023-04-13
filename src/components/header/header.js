import "./header.scss";
import Input from "../input/input";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link className="link" to="/">
          Current News
        </Link>
      </h1>
      <Input />
    </div>
  );
};

export default Header;



// const Header = () => {
//   return (
//     <div className="header">
//       <h1>
//         <Link className="link" to="/" >
//           Current News
//         </Link>
//       </h1>
//       <Input />
//     </div>
//   );
// };

// export default Header;
