import './Header.css'

export default () => {
    return <div className="containerHeader">
        <div className="containerNavLeft">
            <div className="navLeftTxt">
                <h3>HOME</h3>
                <h3>SERVICES</h3>
                <h3>ABOUT</h3>
                <h3>REVIEWS</h3>
            </div>
        </div>
        <div className="containerNavRight">
            <div className="navRightTxt">
                <h3>CONTACT US</h3>
                <h3>PAINT</h3>
                <h3>CLEANING</h3>
            </div>
        </div>
    </div>
}