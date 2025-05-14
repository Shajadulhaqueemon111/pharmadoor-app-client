import { Link } from "react-router-dom";
import ErrImage from "../../../assets/error1.webp";
const ErrorPage = () => {
  return (
    <div>
      <div>
        <img className="mx-auto w-3/5 " src={ErrImage} alt="" />
      </div>
      <div className="mx-auto text-center">
        <Link to="/">
          <button className="btn btn-secondary ">
            Please-Go-To-Your-Home-Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
