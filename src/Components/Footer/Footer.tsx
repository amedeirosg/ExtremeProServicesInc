import "./Footer.css";
//@ts-ignore

import CreatedBy from "../../assets/createdby.png";
//@ts-ignore
import CreatedByDevice from "../../assets/createdByPhone.png";
//@ts-ignore
import Instagram from "@mui/icons-material/Instagram";
//@ts-ignore
import TiktokIcon from "../../Components/Tiktok/TikTokIcon.tsx";

export default () => {
  return (
    <div className="container-footer">
      <div className="footer-content">
        <div className="created-by">
          <span>©2024 Extreme Pro Services Inc ®- All rights reserved.</span>
          <div className="img-createdby">
            <img id="desktop-created" src={CreatedBy} alt="createdby" />
            <img id="device-created" src={CreatedByDevice} alt="createdby" />
          </div>
        </div>
      </div>
    </div>
  );
};
