import '../style.css';

const Price = ({ originalPrice, offerPrice }) => {
    return (
        <div className="price-container">
            <div className="offer-price">${offerPrice} USD</div>
            <div className="original-price">${originalPrice} USD</div>
        </div>
    );
}

export default Price;
