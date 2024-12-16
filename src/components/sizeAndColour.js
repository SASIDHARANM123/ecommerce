import '../style.css';

const SizeAndColour = ({ repeat }) => {
    const sizeOptions = ["small", "medium", "large"];
    const colorOptions = ["black", "red", "blue"];

    return (
        <div className="size-and-colour-container">
            <div className="size-and-colour-header">
                <label className="size-and-colour-label"></label>
                <label className="size-and-colour-label" style={{ width: "72px" }}>Size</label>
                <label className="size-and-colour-label" style={{ width: "72px" }}>Colour</label>
            </div>
            {Array.from({ length: repeat }).map((_, index) => (
                <div key={index} className="size-and-colour-option-container">
                    <div className="size-index">
                        #{index + 1}
                    </div>

                    <select name={`size-${index}`} id={`size-${index}`} className="select-input">
                        {sizeOptions.map((size) => (
                            <option key={size} value={size}>
                                {size.charAt(0).toUpperCase() + size.slice(1)}
                            </option>
                        ))}
                    </select>

                    <select name={`colour-${index}`} id={`colour-${index}`} className="select-input">
                        {colorOptions.map((color) => (
                            <option key={color} value={color}>
                                {color.charAt(0).toUpperCase() + color.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    );
};

export default SizeAndColour;
