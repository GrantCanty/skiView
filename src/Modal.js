import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = ({show, onCloseModalButton, resorts}) => {
    const [form, setForm] = React.useState({
        resortName: "",
        longitude: Number,
        latitude: Number,
        delete: "",
    })

    const [option, setOption] = React.useState("")

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleOptionChange = e => {
        setOption(e.target.value)
    }

    const submitForm = e => {
        e.preventDefault()
        if (option === "Add") {
            resorts.set(form.resortName, [form.latitude, form.longitude])
        }
        if (option === "Delete") {
            resorts.delete(form.resortName)
        }
    }
    
    if (!show) {
        return null
    }

    return ReactDOM.createPortal (
       <div className='modal-bg'>
            <div className='modal'>
                <form onSubmit={submitForm}>
                    <label>Modify: 
                        <select 
                        name="option"
                        value={option}
                        onChange={handleOptionChange}
                        >
                            <option value="" disabled={true}>-- Choose an Option --</option>
                            <option value="Add">Add</option>
                            <option value="Delete">Delete</option>
                        </select>
                    </label>
                    {option === "" ? null :
                        option === "Add" ?
                            <div>
                                <label>Resort Name 
                                    <input 
                                    type="text" 
                                    name="resortName"
                                    value={form.resortName}
                                    onChange={handleChange}
                                    />
                                </label>
                                <br></br>
                                <label>Longitude
                                    <input 
                                    type="number" 
                                    name="longitude"
                                    value={form.longitude}
                                    onChange={handleChange}
                                    />
                                </label>
                                <br></br>
                                <label>Latitude
                                    <input 
                                    type="number" 
                                    name="latitude"
                                    value={form.latitude}
                                    onChange={handleChange}
                                    />
                                </label>
                                <button type='submit'>Submit</button>
                            </div> :
                            <div>
                                <select 
                                name="delete"
                                value={form.delete}
                                onChange={handleChange}
                                >   
                                    {[...resorts.keys()].map((item)=> {
                                        return <option key={item} value={item}>{item}</option>
                                    })}
                                </select>
                                <button type='submit'>Submit</button>
                            </div>
                    }
                </form>
                <button onClick={onCloseModalButton}>Close Modal</button>
            </div>
        </div>
        , document.body
    )
}

export default Modal;