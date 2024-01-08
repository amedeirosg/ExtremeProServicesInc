import './Title.css'
//@ts-ignore
import BGT from '../../assets/CleaningBackground.png'
export default () => {
    return (
    <div className="containerTitle">
        <div className="containerImg">
            <img src={BGT}/>
        </div>
        <div className="containerTitleTxt">
            <div className="txtTitle">
                <span>EXTREME PRO SERVICES INC</span>
                <text className="spanSubTitlte">Residential and Commercial<br></br>Cleaning</text>
            </div>
        </div>
    </div>
    )
}