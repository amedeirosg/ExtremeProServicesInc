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
      <div className="containerInfoBox">
        <div className="containerTitleBox">
          <span>{props.serviceTitle}</span>
        </div>
        <div className="containerResults">
          <div className="containerBeforeAndAfter">
            <div className="containerBefore">
              <span>Before</span>
            </div>
            <div className="containerAfter">
              <span>After</span>
            </div>
          </div>
        </div>
        <div className="containerImgsResults">
          <div className="containerImgBeforeAndAfter">
            <div className="containerFirstImg">
              <img src={props.sourceImg} />
            </div>
            <div className="containerSecondImg">
              <img src={props.sourceImgT} />
            </div>
          </div>
        </div>
      </div>
      <div className="containerDescResClean">
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
