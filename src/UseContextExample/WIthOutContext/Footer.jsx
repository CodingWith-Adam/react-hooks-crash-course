import Logo from "./Logo";
import FooterLinks from "./FooterLinks";

function Footer({ userName }) {
  return (
    <div>
      <Logo />
      <FooterLinks userName={userName} />
    </div>
  );
}

export default Footer;
