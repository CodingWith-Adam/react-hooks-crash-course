import { useContext } from "react";
import UserNameContext from "./UserNameContext";

function Menu() {
  const userName = useContext(UserNameContext);
  console.log(userName);
  return (
    <div>
      Menu
      <uL>
        <li>
          <a href="/">{userName}</a>
        </li>
      </uL>
    </div>
  );
}

export default Menu;
