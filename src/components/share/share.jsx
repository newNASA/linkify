import "./share.scss"

import { BsQrCode } from "react-icons/bs";

const Share = () => {
    return (
        <div className="share">
            <a href="" className="share-btn">Share Profile</a>
            <div className="qr-side">
                <button className="qr">
                    <BsQrCode />
                </button>
            </div>
        </div>
    )
}

export default Share;