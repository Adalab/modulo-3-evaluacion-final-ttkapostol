import "../styles/layout/header.scss";

import headerImg from "../Images/headerImg.png";

const Header = () => {
  return (
    <header className="header">
      <img
        alt="Harry Potter glasses and scar logo"
        title="Harry Potter glasses and scar logo"
        src={headerImg}
        className="header__img"
      />
      <h2 className="header__subtitle">your own Harry Potter Saga</h2>
      <h1 className="header__title">Character Finder</h1>
    </header>
  );
};

export default Header;
