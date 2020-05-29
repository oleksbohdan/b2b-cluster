import React from "react";
import './social.styles.scss';

const Social = ({url, href}) => (
    <div className="bo-social-image-container">
        <a
            href={href}
            className="bo-social"
            style={{backgroundImage: `url(${url})`}}
        />
    </div>
);

export default Social;