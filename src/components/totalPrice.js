import '../style.css';

const TotalPrice = ({ totalValue }) => {
    return (
        <div className="total-price-container">
            <div className="free-delivery">Free Delivery</div>
            <div className="total-value">
                Total : ${totalValue}
                <span className="total-amount">.00 USD</span>
            </div>
        </div>
    );
}

export default TotalPrice;
