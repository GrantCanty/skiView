import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = ({show, onCloseModalButton, resorts, submitForm, handleOptionChange, handleFormChange, option, form}) => {

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
                                    <label>Resort Name 
                                        <input 
                                        key="name"
                                        type="text" 
                                        name="resortName"
                                        value={form.resortName}
                                        onChange={handleFormChange}
                                        id={ resorts.has(form.resortName.toLowerCase()) === true ? "exists" : "" }
                                        />
                                    </label>
                                    <label>Latitude
                                        <input 
                                        key="lat"
                                        type="number" 
                                        name="latitude"
                                        value={form.latitude}
                                        onChange={handleFormChange}
                                        />
                                    </label>
                                    <label>Longitude
                                        <input 
                                        key="long"
                                        type="number" 
                                        name="longitude"
                                        value={form.longitude}
                                        onChange={handleFormChange}
                                        />
                                    </label>
                                    <button type='submit'>Submit</button>
                                </div> :
                                <div>
                                    <label>Delete Resort
                                        <select 
                                        name="resortName"
                                        value={form.resortName}
                                        onChange={handleFormChange}
                                        >   
                                        <option value="" disabled={true}>-- Delete any Resort --</option>
                                            {[...resorts.keys()].map((item)=> {
                                                const words = item.split(" ")
                                                //console.log(words.length(), typeof words[0])
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