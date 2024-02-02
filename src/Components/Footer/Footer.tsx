import "./Footer.css";
import CreatedBy from "../../assets/createdby.png";
import Instagram from "@mui/icons-material/Instagram";
import TiktokIcon from '../../Components/Tiktok/TikTokIcon.tsx'

export default () => {
  return (
    <div className="container-footer">
      <div className="footer-content">
        <div className="social-media">
          <div className="instagram">
            <Instagram />
          </div>
          <div className="tiktok">
            <TiktokIcon />
          </div>
        </div>
        <div className="created-by">
          <span>©2024 Extreme Pro Services Inc ®- All rights reserved.</span>
          <div className="img-createdby">
            <img src={CreatedBy} alt="createdby" />
          </div>
        </div>
      </div>
    </div>
  );
};
