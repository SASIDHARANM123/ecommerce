import React from "react";
import Offer from "./offer";
import Price from "./price";
import Unit from "./unit";
import SizeAndColour from "./sizeAndColour";
import '../style.css';

const UnitWithOfferPrice = ({
    unitValue,
    offerPercent,
    priceType,
    originalPrice,
    offerPrice,
    selectedUnit,
    setSelectedUnit,
    updateTotalValue,
}) => {
    const inputId = `unit-offer-${unitValue}`;

    const handleRadioChange = (e) => {
        setSelectedUnit(e.target.value);
        updateTotalValue(unitValue);
    };

    const isActive = selectedUnit == unitValue;
    const isSecondUnit = unitValue === 2;

    return (
        <div className={`unit-container ${isActive ? 'unit-container-active' : 'unit-container-inactive'}`}>
            {isSecondUnit && (
                <div className="popular-label">
                    MOST POPULAR
                </div>
            )}

            <div style={{ display: "flex" }}>
                <input
                    type="radio"
                    id={inputId}
                    name="unitPrice"
                    value={unitValue}
                    onChange={handleRadioChange}
                    style={{ accentColor: "#FF1493" }}
                />
                <label htmlFor={inputId} className="radio-label">
                    <div className="unit-info">
                        <div className="unit-header">
                            <Unit unitValue={unitValue} />
                            <Offer offerPercent={offerPercent} />
                        </div>
                        {priceType && (
                            <div className="price-type">
                                {priceType}
                            </div>
                        )}
                    </div>
                    <Price originalPrice={originalPrice} offerPrice={offerPrice} />
                </label>
            </div>
            {isActive && <SizeAndColour repeat={2} />}
        </div>
    );
};

export default UnitWithOfferPrice;
