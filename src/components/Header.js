import headerImg from "../Images/Header.png";
import "../styles/layout/header.scss";

const Header = () => {
  return (
    <header className="header">
      <img alt="" title="" src={headerImg} className="header__img" />
    </header>
  );
};

export default Header;
