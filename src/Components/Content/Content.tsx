import './Content.css'
import InfoBox from '../InfoBox/InfoBox.tsx'
import Phone from '@mui/icons-material/LocalPhone';
import Location from '@mui/icons-material/LocationOn';
import OpeningHours from '@mui/icons-material/AccessTime';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
//@ts-ignore
import Tiktok from '../../assets/Tiktok.png'
//@ts-ignore
import ImgTest from '../../assets/Logo.jpg'
export default () => {
    return <div className="containerContent">
        <div className="containerTitleContent">
            <span>SERVICES</span>
        </div>
        <div className="containerInfoBoxes">
            <InfoBox serviceTitle="Residential & Commercial Cleaning" sourceImg={ImgTest} desc1={'- House & Office Cleaning '}
            desc2={'- Deep cleaning (weekly cleaning)'}
            desc3={'- Move-in and move-out '}
            desc4={'- Windows cleaning '}
            desc5={'- Spring cleaning '}
            desc6={'- Housekeeping '}
            desc7={'- Laundry '}
            desc8={'- Closet organization'}/>
            
            <InfoBox serviceTitle="Painting Service" sourceImg={ImgTest} desc1={'- Paint Services'}
            desc2={'- Interior and exterior '}
            desc3={'- Pressure washing '}
            desc4={'- Deck '}
            desc5={'- Stain '}
            desc6={''}
            desc7={''}
            desc8={''}/>
        </div>
        <div className="containerAboutUs">
            <div className="containerTitleAbout">
                <span>About Us</span>
                <div className="sectionLine">
                    <hr></hr>
                </div>
            </div>
            <div className="containerDescAbout">
                <div className="containerTxtAbout">
                    <div className="containerLeftSAbout">
                        <span id='title'>Extreme Pro Services Inc is a Cleaning Company</span>
                        <br></br>
                        <div className="containerSubtitle">
                        <span id="subtitle">We pride ourselves on being honest and competitive with our pricing. Customer satisfaction is our number one priority. 
                        <br></br>
                        <br></br>
                        <b>Call today for your free estimate!</b>
                        <br></br>
                        <br></br>
                        We have have a partnership with Cleaning for A Reason, an organization that provides free home cleaning to patients battling cancer. When cancer makes life at home difficult, our trusted network of residential cleaners, cleaning industry volunteers, 
                        and community volunteers come together to support cancer patients and their families.</span>
                        </div>
                    </div>
                    <div className="containerRightSAbout">
                        <div className="containerContactUs">
                            <div className="containerContact">
                                <div className="icons">
                                    <Phone/>
                                    <b>PHONE</b>
                                </div>
                                <span>423 321 9837</span>
                            </div>
                            <div className="containerContact">
                                <div className="icons">
                                    <Location/>
                                    <b>LOCATION</b>
                                </div>
                                <span>Massachussets - Boston</span>
                            </div>
                            <div className="containerContact">
                                <div className="icons">
                                    <OpeningHours/>
                                    <b>HOURS</b>
                                </div>
                                <span>M-Sat. 7 am-5 pm</span>
                            </div>
                            <div className="socialMedia">
                                <div className="containerTiktok">
                                    <div className="containerTikTokIcon">
                                        <img src={Tiktok}/>
                                    </div>
                                    <span>Tiktok</span>
                                </div>
                                <div className="containerFacebook">
                                    <Facebook/>
                                    <span>Facebook</span>
                                </div>
                                <div className="containerInstagram">
                                    <Instagram/>
                                    <span>Instagram</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}