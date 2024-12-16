import '../style.css';
import Button from "./button";

const TotalWithButton = () => {
    return (
        <div className="total-with-button-container">
            <div className="button-container">
                <Button buttonName={"Add to Cart"} />
                <i className="powered-by-text">@ Powered by Pumper</i>
            </div>
        </div>
    );
}

export default TotalWithButton;
