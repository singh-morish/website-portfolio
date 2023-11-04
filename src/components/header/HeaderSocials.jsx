import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { LuFigma } from "react-icons/lu";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="blank">
        <FaGithub />
      </a>
      <a href="https://dribble.com" target="blank">
        <LuFigma />
      </a>
    </div>
  );
};

export default HeaderSocials;
