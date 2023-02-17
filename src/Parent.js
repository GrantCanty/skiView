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
        resortName: "",
        longitude: Number,
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

    function clearFormData() {
        formData.resortName = ""
        formData.latitude = NaN
        formData.longitude = NaN
    }

    const submitForm = e => {
        e.preventDefault()
        if (formOption === "Add") {
            setResorts(new Map(resorts.set(formData.resortName.toLowerCase(), [formData.latitude, formData.longitude])))
        }
        if (formOption === "Delete") {
            let tmpResorts = resorts
            tmpResorts.delete(formData.resortName)
            setResorts(new Map(tmpResorts))
        }
        clearFormData()
    }

    return (
        <div>
            <ResortList appId={appId} resorts={resorts}/>
            <Modal show={show} onCloseModalButton={onCloseModalButton} resorts={resorts} submitForm={submitForm} handleOptionChange={handleFormOptionChange} handleFormChange={handleFormDataChange} option={formOption} form={formData} />
        </div>
    )
}

export default ParentComponent;