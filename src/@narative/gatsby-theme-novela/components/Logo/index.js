import React from "react";
import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

import LargeLogo from "../../../../assets/logo.svg";
import MobileLogo from "../../../../assets/mobile-logo.svg";

const Logo = () => (
  <LogoContainer>
    <img className="Logo__Desktop" src={LargeLogo} alt="" />
    <img className="Logo__Mobile" src={MobileLogo} alt="" />
  </LogoContainer>
);

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile {
      display: block;
    }
  `}
`;

export default Logo;
