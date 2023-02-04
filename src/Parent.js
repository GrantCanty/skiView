import React from 'react'
import ResortList from './ResortList'
import Modal from './Modal'

const ParentComponent = ({show, onCloseModalButton}) => {
    const [resorts, setResorts] = React.useState({})
    
    //const resorts = new Map()
    resorts.set("Keystone", [39.6069742, -105.97011])
    resorts.set("Breckenridge", [39.4808, -106.0676])
    resorts.set("Vail", [39.6061, -106.3550])
    resorts.set("Crested Butte", [38.8991, -106.9658])
    resorts.set("Winter Park", [39.8841, -105.7627])
    resorts.set("Copper Mountain", [39.5022, -106.1497])
    const appId = "1fc3b06f07bf594c3e96a179830ecd4c";

    const [formOption, setFormOption] = React.useState("")
    
    const [formData, setFormData] = React.useState({
        resortName: "",
        longitude: Number,
        latitude: Number,
    })

    const handleOptionChange = e => {
        setFormOption(e.target.value)
    }

    const handleFormDataChange = e => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const submitForm = e => {
        e.preventDefault()
        if (formOption === "Add") {
            resorts.set(formData.resortName, [formData.latitude, formData.longitude])
        }
        if (formOption === "Delete") {
            resorts.delete(formData.resortName)
        }
    }

    return (
        <div>
            <ResortList appId={appId} resorts={resorts}/>
            <Modal show={show} onCloseModalButton={onCloseModalButton} resorts={resorts} submitForm={submitForm} handleOptionChange={handleOptionChange} handleFormChange={handleFormDataChange} option={formOption} form={formData} />
        </div>
    )
}

export default ParentComponent;