import './Header.css'

function Header(props) {
    return (
        <div className="header">
            <button className="modify-button" onClick={props.onClick}>Modify</button>
        </div>
   )
}

export default Header;