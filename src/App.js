import Header from './Header.js'
import ResortList from './ResortList'
import useModal from './useModal'
import Modal from './Modal'

const resorts = new Map()
resorts.set("Keystone", [39.6069742, -105.97011])
resorts.set("Breckenridge", [39.4808, -106.0676])
resorts.set("Vail", [39.6061, -106.3550])
resorts.set("Crested Butte", [38.8991, -106.9658])
resorts.set("Winter Park", [39.8841, -105.7627])
resorts.set("Copper Mountain", [39.5022, -106.1497])
const appId = "1fc3b06f07bf594c3e96a179830ecd4c";


function App() {
    const [isShowingModal, toggleModal] = useModal()
    
    return (
        <div>
            <Header onClick={toggleModal}/>
            <ResortList appId={appId} resorts={resorts}/>
            <Modal show={isShowingModal} onCloseModalButton={toggleModal} resorts={resorts} />
        </div>
    )
}

export default App;