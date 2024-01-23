import './Title.css'
//@ts-ignore
import BGT from '../../assets/Background.jpg'

export default () => {
    return (
    <div className="containerTitle">
        <div className="containerImg">
            <img src={BGT}/>
        </div>
        <div className="containerTitleTxt">
            <div className="txtTitle">
                <span className="title">EXTREME PRO SERVICES INC</span>
                <span className="spanSubTitlte">Residential and Commercial <br></br> Painting & Cleaning</span>
            </div>
        </div>
    </div>
    )
}