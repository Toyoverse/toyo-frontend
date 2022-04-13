import './index.scss'

const PopUpMessage = ({ message, children }) => {
    return (
        <span className="pop-up-message">
            {children}
            <div className="pop-up-message__box">
                {message}
            </div>
        </span>
    );
};

export default PopUpMessage;