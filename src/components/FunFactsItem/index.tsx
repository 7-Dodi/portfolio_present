import "./style.css";

interface Props{
    details?: string
}

export const FunFactsItem:React.FC<Props> = ({details}) => {
    return(
        <div className="funfactsItem">
            <span className="funfactsDetails">{details}</span>
        </div>
    )
}