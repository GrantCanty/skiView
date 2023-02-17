const NumInput = ({label, name, value, valueChanged, onChange, min, max}) => {
    return (
        <label>{label} 
            <input 
            key="num-input"
            type="number" 
            name={name}
            value={value}
            onChange={onChange}
            min={min}
            max={max}
            step="0.0001"
            id={value > max || value < min ? "error" : valueChanged ? value.length > 0 ? "no-error" : "error" : null}
            />
        </label>
    )
}

export default NumInput;