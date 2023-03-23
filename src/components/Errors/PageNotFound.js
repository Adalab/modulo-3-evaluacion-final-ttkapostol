import { Link } from "react-router-dom";
import PageNotFoundImg from "../../Images/pageNotFound.png";
import "../../styles/layout/pageNotFound.scss";

const PageNotFound = () => {
  return (
    <>
      <section className="container">
        <article className="pageNotFound">
          <h2 className="pageNotFound__title">
            Ups! The page you are looking for does not exist.
          </h2>
          <p className="pageNotFound__text">
            Or maybe we don't have the hero you are looking for in our
            collection, yet!
          </p>
          <img
            alt="Graphic of the golden snitch"
            title="Graphic of the golden snitch"
            src={PageNotFoundImg}
          />
        </article>
        <Link to="/">
          <input
            type="button"
            value="Go back to the list of characters"
            className="btn404"
          />
        </Link>
      </section>
    </>
  );
};

export default PageNotFound;
