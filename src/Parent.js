import React from 'react'
import ResortList from './ResortList'
import Modal from './Modal'

const ParentComponent = ({show, onCloseModalButton}) => {
    const [resorts, setResorts] = React.useState(new Map())
    
    React.useEffect(() => {
        const tmpResorts = new Map(resorts)
        tmpResorts.set("keystone", [39.6069742, -105.97011])
        tmpResorts.set("breckenridge", [39.4808, -106.0676])
        tmpResorts.set("vail", [39.6061, -106.3550])
        tmpResorts.set("crested butte", [38.8991, -106.9658])
        tmpResorts.set("winter park", [39.8841, -105.7627])
        tmpResorts.set("copper mountain", [39.5022, -106.1497])
        setResorts(tmpResorts)
    }, [])

    const appId = "4f74209f6a3a9e020b85ea78b3e8bc64";

    const [formOption, setFormOption] = React.useState("")
    
    const [formData, setFormData] = React.useState({
        resortNameChanged: false,
        resortName: "",
        
        longitudeChanged: false,
        longitude: Number,

        latitudeChanged: false,
        latitude: Number,
    })

    const handleFormOptionChange = e => {
        setFormOption(e.target.value)
    }

    const handleFormDataChange = e => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,

        }))
    }

    const handleResortNameChange = e => {
        formData.resortNameChanged=true;
        handleFormDataChange(e)
    }

    const handleLatitudeChange = e => {
        formData.latitudeChanged=true
        handleFormDataChange(e)
    }

    const handleLongitudeChange = e => {
        formData.longitudeChanged=true
        handleFormDataChange(e)
    }

    function clearFormData() {
        formData.resortNameChanged = false
        formData.resortName = ""
        
        formData.latitudeChanged = false
        formData.latitude = NaN

        formData.longitudeChanged = false
        formData.longitude = NaN
    }

    const submitForm = e => {
        e.preventDefault()
        if (formOption === "Add") {
            if ((formData.resortName.length > 0 && formData.resortNameChanged === true) && (formData.latitude.length > 0 && formData.latitudeChanged === true) && (formData.longitude.length > 0 && formData.longitudeChanged === true)) {
                setResorts(new Map(resorts.set(formData.resortName.toLowerCase(), [formData.latitude, formData.longitude])))
                clearFormData()
            }
        }
        if (formOption === "Delete") {
            let tmpResorts = resorts
            tmpResorts.delete(formData.resortName)
            setResorts(new Map(tmpResorts))
            clearFormData()
        }
    }

    return (
        <div>
            <ResortList appId={appId} resorts={resorts}/>
            <Modal show={show} onCloseModalButton={onCloseModalButton} resorts={resorts} submitForm={submitForm} handleOptionChange={handleFormOptionChange} option={formOption} form={formData} resortChange={handleResortNameChange} latitudeChange={handleLatitudeChange} longitudeChange={handleLongitudeChange} handleDelete={handleFormDataChange} />
        </div>
    )
}

export default ParentComponent;