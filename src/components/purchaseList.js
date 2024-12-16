import '../style.css';
import UnitContainer from "./unitContainer";
import TotalWithButton from "./totalWithButton";

const PurchaseList = () => {
    return (
        <div className="purchase-list-container">
            <UnitContainer />
            <TotalWithButton />
        </div>
    );
}

export default PurchaseList;
