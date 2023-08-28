import { useContext } from "react";
import UserNameContext from "./UserNameContext";

function WelcomeMessage() {
  const userName = useContext(UserNameContext);
  return <div>Welcome {userName} </div>;
}

export default WelcomeMessage;
