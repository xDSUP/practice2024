import React from "react";

import "./index.css"

const avatar = require("../image/avatar.jpg");

export const Author: React.FC = () => {
  return (
    <div className="navigation-logo-avatar-area">
      <div className="navigation-avatar" onClick={() => window.open("https://www.vk.com/xd_hohoho", '_blank')}>
        <img className="navigation-avatar-icon" src={avatar} alt="avatar"/>
        Илья Елфимов
      </div>
    </div>
  );
}
