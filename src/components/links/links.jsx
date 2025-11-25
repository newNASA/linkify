import "./links.scss";

import { IoMdLink } from "react-icons/io";

const Links = ({ links }) => {
    return (
        <div className="links">
            {links?.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="link-button"
                >
                    <div className="left">
                        {links.logo ? (
                            <img src={links.logo} alt="" />
                        ) : (
                            <IoMdLink />
                        )}
                    </div>
                    <div className="right">
                        <p>{link.title}</p>
                        <span>{link.url}</span>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Links;