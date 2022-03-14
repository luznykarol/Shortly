import React from "react";
import BoostDesktop from "../icons/boost_desktop";
import BoostMobile from "../icons/boost_mobile";
import Brand from "../icons/brand";
import Customizable from "../icons/customizable";
import Facebook from "../icons/facebook";
import Instagram from "../icons/instagram";
import Logo from "../icons/logo";
import Pinterest from "../icons/pinterest";
import Records from "../icons/records";
import ShortenDesktop from "../icons/shorten_desktop";
import ShortenMobile from "../icons/shorten_mobile";
import Twitter from "../icons/twitter";
import Working from "../icons/working";

const Icon = ({ icon, className }) => {
  const icons = {
    arrowDown: BoostDesktop,
    boost_desktop: BoostDesktop,
    boost_mobile: BoostMobile,
    brand: Brand,
    customizable: Customizable,
    logo: Logo,
    instagram: Instagram,
    facebook: Facebook,
    pinterest: Pinterest,
    records: Records,
    shorten_desktop: ShortenDesktop,
    shorten_mobile: ShortenMobile,
    twitter: Twitter,
    working: Working,
  };

  const Icon = icons[icon];
  return (
    <>
      {icon && (
        <div className={className}>
          <Icon />
        </div>
      )}
    </>
  );
};

export default Icon;
