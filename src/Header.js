import './Header.css'

function Header(props) {
    return (
        <div className="Header">
            <button className="Modify-Button" onClick={props.onClick}>Modify</button>
        </div>
   )
}

export default Header;