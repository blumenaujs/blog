import React from 'react'

import { DesktopLogo } from './DesktopLogo'
import { MobileLogo } from './MobileLogo'

const getColor = fill => fill === '#000' ? '#515050' : '#fff'

const Logo = ({ fill }) => (
  <>
    <DesktopLogo fill={getColor(fill)} />
    <MobileLogo fill={getColor(fill)} />
  </>
)

export default Logo
