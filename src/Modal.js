import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'
import NumInput from './numinput'
import TextInput from './textinput'

const Modal = ({show, onCloseModalButton, resorts, submitForm, handleOptionChange, option, form, resortChange, latitudeChange, longitudeChange, handleDelete}) => {

    if (!show) {
        return null
    }

    return ReactDOM.createPortal (
       <div className='modal-bg'>
            <div className='modal'>
                <form onSubmit={submitForm}>
                    <div className='form-body'>
                    <label className='form-title'>Modify Resort List</label>
                        <label>Option: 
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
                                    <TextInput label="Resort Name" key="name" name="resortName" value={form.resortName} valueChanged={form.resortNameChanged} onChange={resortChange} resorts={resorts} />
                                    { /*<p className='form-error-message' id={resorts.has(form.resortName.toLowerCase()) === true ? "error" : null} >Resort already exists</p>*/ }
                                    <NumInput label="Latitude" key="lat" name="latitude" value={form.latitude} valueChanged={form.latitudeChanged} onChange={latitudeChange} min={-90} max={90} />
                                    { /*<p className='form-error-message' id={form.latitude > 90 || form.latitude < -90 ? "error" : null} >Latitude is too { form.latitude > 90 ? "large": "small"}</p>*/ }
                                    <NumInput label="Longitude" key="long" name="longitude" value={form.longitude} valueChanged={form.longitudeChanged} onChange={longitudeChange} min={-180} max={180} />
                                    { /*<p className='form-error-message' id={form.longitude > 180 || form.longitude < -180 ? "error" : null} >Longitude is too {form.longitude > 180 ? "large": "small"}</p>*/ }
                                    <button type='submit'>Submit</button>
                                </div> :
                                <div>
                                    <label>Delete Resort
                                        <select 
                                        name="resortName"
                                        value={form.resortName}
                                        onChange={handleDelete}
                                        >   
                                        <option value="" disabled={true}>-- Delete any Resort --</option>
                                            {[...resorts.keys()].map((item)=> {
                                                const words = item.split(" ")
                                                for (let i = 0; i < words.length; i++) {
                                                    words[i] = words[i][0].toUpperCase() + words[i].substr(1)
                                                }
                                                const resortName = words.join(" ")
                                                return <option key={item} value={item}>{resortName}</option>
                                            })}
                                        </select>
                                    </label>
                                    <button type='submit'>Submit</button>
                                </div>
                        }
                    </div>
                </form>
                <div className='submit'>
                    <button onClick={onCloseModalButton}>Close Modal</button>
                </div>
            </div>
        </div>
        , document.body
    )
}

export default Modal;