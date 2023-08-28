import Logo from "./Logo";
import Menu from "./Menu";

function Header({ userName }) {
  return (
    <div>
      <Logo />
      <Menu userName={userName} />
    </div>
  );
}

export default Header;
