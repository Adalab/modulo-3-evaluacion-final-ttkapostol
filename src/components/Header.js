import "../styles/layout/header.scss";
import headerImg from "../Images/headerImg.png";
import headerImg2 from "../Images/headerImg2.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__div1">
        <img
          alt="Harry Potter glasses and scar logo"
          title="Harry Potter glasses and scar logo"
          src={headerImg}
          className="header__div1--img"
        />
        <h2 className="header__div1--subtitle">your own Harry Potter Saga</h2>
        <h1 className="header__div1--title">Character Finder</h1>
      </div>
      <div className="header__div2">
        <img
          alt="Hedwig fine line sketch"
          title="Hedwig fine line sketch"
          src={headerImg2}
          className="header__div2--img"
        />
      </div>
    </header>
  );
};

export default Header;
