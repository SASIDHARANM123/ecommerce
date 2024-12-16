import React, { useState } from "react";
import UnitWithOfferPrice from "./unitWithOffer";
import Welcome from "./welcome";
import TotalPrice from "./totalPrice";
import '../style.css';

const UnitContainer = () => {
    const [selectedUnit, setSelectedUnit] = useState(null);
    const [totalValue, setTotalValue] = useState(0);

    const unitsData = [
        { unitValue: 1, offerPercent: 10, originalPrice: "24.00", priceType: "Standard Price", offerPrice: "10.00" },
        { unitValue: 2, offerPercent: 20, originalPrice: "24.00", offerPrice: "18.00" },
        { unitValue: 3, offerPercent: 30, originalPrice: "24.00", offerPrice: "24.00" },
    ];

    const updateTotalValue = (unitValue) => {
        const offerPrices = {
            1: 10.00,
            2: 18.00,
            3: 24.00,
        };

        setTotalValue(offerPrices[unitValue]);
    };

    return (
        <div className="unit-contain">
            <div className="inner-container">
                <Welcome />
                {unitsData.map((unit) => (
                    <UnitWithOfferPrice
                        key={unit.unitValue}
                        unitValue={unit.unitValue}
                        offerPercent={unit.offerPercent}
                        priceType={unit.priceType}
                        originalPrice={unit.originalPrice}
                        offerPrice={unit.offerPrice}
                        selectedUnit={selectedUnit}
                        setSelectedUnit={setSelectedUnit}
                        updateTotalValue={updateTotalValue}
                    />
                ))}
            </div>
            <TotalPrice totalValue={totalValue} />
        </div>
    );
};

export default UnitContainer;
