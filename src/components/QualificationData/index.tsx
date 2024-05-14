import "./style.css";

interface Props {
    style?: string,
    title?: string,
    subTitle?: string,
    data?: string,
}

export const QualificationData: React.FC<Props> = ({style, title, subTitle, data}) => {
    return(
        <div className="qualificationData">
            {style === "right" ? (
                <>
                    <div></div>
                    <div>
                        <span className="qualificationRound"></span>
                        <span className="qualificationLine"></span>
                    </div>
                    <div>
                        <h3 className="qualificationTitle">{title}</h3>
                        <span className="qualificationSubTitle">{subTitle}</span>
                        <div className="qualificationCalendar">
                            <i className="uil uil-calendar-alt"></i>
                            {data}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <h3 className="qualificationTitle">{title}</h3>
                        <span className="qualificationSubTitle">{subTitle}</span>
                        <div className="qualificationCalendar">
                            <i className="uil uil-calendar-alt"></i>
                            {data}
                        </div>
                    </div>
                    <div>
                        <span className="qualificationRound"></span>
                        <span className="qualificationLine"></span>
                    </div>
                </>
            )}
        </div>
    );
};
