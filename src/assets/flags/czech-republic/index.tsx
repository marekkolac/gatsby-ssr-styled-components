import React from 'react'

// @styles
import { Flag } from '@Flags/styles'

// @types
import { IFlag } from '@Flags/types'

const CzechRepublic: React.FC<IFlag> = ({ size, maxSize, onClick, isActive = false }) => {
  return (
    <Flag
      id="flag-czech-republic"
      className="flag"
      size={size}
      maxSize={maxSize}
      isActive={isActive}
      onClick={onClick}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        stroke="currentColor"
        strokeWidth="0"
        fill="currentColor"
      >
        <circle style={{ fill: '#F0F0F0' }} cx="256" cy="256" r="256"/>
        <path style={{ fill: '#D80027' }} d="M233.739,256c0,0-158.609,181.055-158.759,181.019C121.306,483.346,185.307,512,256,512c141.384,0,256-114.616,256-256H233.739z"/>
        <path style={{ fill: '#0052B4' }} d="M74.98,74.98c-99.974,99.974-99.974,262.065,0,362.04C116.293,395.707,156.026,355.974,256,256L74.98,74.98z"/>
      </svg>
    </Flag>
  )
}

export default CzechRepublic