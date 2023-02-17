const TextInput = ({label, name, value, valueChanged, onChange, resorts}) => {
    return (
        <label>{label} 
            <input 
            key="text-input"
            type="text" 
            name={name}
            value={value}
            onChange={onChange}
            id={ resorts.has(value.toLowerCase()) === true ? "error" : valueChanged ? value.length > 0 ? "no-error" : "error" : null }
            />
        </label>
    )
}

export default TextInput;