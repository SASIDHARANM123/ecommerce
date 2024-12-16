import { ReactComponent as PlusIcon } from "../Images/plus.svg";
import '../style.css';

const Button = ({ buttonName }) => {
    return (
        <button className="button">
            <PlusIcon />
            {buttonName}
        </button>
    );
};

export default Button;
