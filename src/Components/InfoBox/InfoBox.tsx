import "./InfoBox.css";
export default (props: {
  sourceImg: any;
  sourceImgT: any;
  serviceTitle: any;
  desc1: any;
  desc2: any;
  desc3: any;
  desc4: any;
  desc5: any;
  desc6: any;
  desc7: any;
  desc8: any;
}) => {
  return (
    <div className="containerBoxesContent">
      <div className="containerBoxContent">
        <div className="containerTitleBox">
          <span>{props.serviceTitle}</span>
        </div>
        <div className="containerBeforeAndAfter">
          <span id="before">Before</span>
          <span id="after">After</span>
        </div>
        <div className="containerImgBeforeAndAfter">
          <div className="containerImgBefore">
            <img src={props.sourceImg} alt="srcimg" />
          </div>
          <div className="containerImgAfter">
          <img src={props.sourceImgT} alt="srcimg" />
          </div>
        </div>
      </div>
      <div className="containerDescAboutJob">
      <span>{props.desc1}</span>
        <span>{props.desc2}</span>
        <span>{props.desc3}</span>
        <span>{props.desc4}</span>
        <span>{props.desc5}</span>
        <span>{props.desc6}</span>
        <span>{props.desc7}</span>
        <span>{props.desc8}</span>
      </div>
    </div>
  );
};
