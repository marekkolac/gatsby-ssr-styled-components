import React from 'react'

// @styles
import { Element } from './styles'

// @types
import { IProps } from './types'

const Logo: React.FC<IProps> = ({ size, className }) => {
  return (
    <Element size={size} className={className}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 29.6 35.8"
        stroke="currentColor"
        strokeWidth="0"
        fill="currentColor"
      >
        <defs>
          <linearGradient id="Nepojmenovaný_přechod_66" x1="-24.83" y1="17.9" x2="29.63" y2="17.9" gradientUnits="userSpaceOnUse">
            <stop offset="0" className="secondary" />
            <stop offset="0.2" className="secondary" />
            <stop offset="0.74" className="complementary" />
            <stop offset="1" className="complementary" />
          </linearGradient>
          <linearGradient id="Nepojmenovaný_přechod_8" x1="4.15" y1="54.03" x2="28.57" y2="11.74" gradientUnits="userSpaceOnUse">
            <stop offset="0" className="secondary" />
            <stop offset="0.39" className="secondary" />
            <stop offset="1" className="complementary" />
          </linearGradient>
          <linearGradient id="Nepojmenovaný_přechod_66-2" x1="-3.75" y1="11.46" x2="27.45" y2="11.46" xlinkHref="#Nepojmenovaný_přechod_66" />
          <linearGradient id="Nepojmenovaný_přechod_66-3" x1="-20.69" y1="17.9" x2="26.05" y2="17.9" xlinkHref="#Nepojmenovaný_přechod_66" />
        </defs>
        <path style={{ fill: 'url(#Nepojmenovaný_přechod_66)' }} d="M28.61,12.83l-.29-.46a7.1,7.1,0,0,0-1-1.14A7,7,0,0,0,25.38,10a7.15,7.15,0,0,0-7.65,1.18,2.34,2.34,0,0,0-.35.29L8.79,20.66a6.41,6.41,0,0,1-.55.49,2.17,2.17,0,0,1-1.95.16l-.07,0a2.08,2.08,0,0,1-.55-.36,2.13,2.13,0,0,1-.1-3l7-7.52h0l3-3.28a8.87,8.87,0,0,0,.5-.75c1.53-2.54.73-4.67,0-5.5L15.4,0,1.91,14.49l-.09.11A7.12,7.12,0,0,0,9.94,25.89l.2-.08A6.84,6.84,0,0,0,11.52,25a6.45,6.45,0,0,0,.82-.75L20.94,15a2.12,2.12,0,0,1,3-.09A2.18,2.18,0,0,1,24.56,16a2,2,0,0,1,0,.34,2.14,2.14,0,0,1-.3,1.18,3,3,0,0,1-.27.35l-7.44,8h0L14,28.71C11.8,31.57,12.69,34,13.47,35l.73.85L27.69,21.31A7.14,7.14,0,0,0,28.61,12.83Z" />
        <path style={{ fill: 'none' }} d="M8.79,20.66a6.41,6.41,0,0,1-.55.49,2.12,2.12,0,0,0,.44-.35l8.57-9.21.48-.46a2.34,2.34,0,0,0-.35.29Z" />
        <path style={{ fill: 'url(#Nepojmenovaný_přechod_8)' }} d="M28.61,12.83l-.29-.46a7.1,7.1,0,0,0-1-1.14A7,7,0,0,0,25.38,10a7.12,7.12,0,0,1-1.08,7.6,3,3,0,0,1-.27.35l-7.44,8h0L14,28.71C11.8,31.57,12.69,34,13.47,35l.73.85L27.69,21.31A7.14,7.14,0,0,0,28.61,12.83Z" />
        <path style={{ fill: 'url(#Nepojmenovaný_přechod_66-2)' }} d="M16.13.85,15.4,0,1.91,14.49l-.09.11a7.14,7.14,0,0,0-1.2,7.68,7.17,7.17,0,0,0,6,0A7.45,7.45,0,0,0,8,21.4l.27-.25a2.17,2.17,0,0,1-1.95.16l-.07,0a2.08,2.08,0,0,1-.55-.36,2.13,2.13,0,0,1-.1-3l7-7.52h0l3-3.28a8.87,8.87,0,0,0,.5-.75C17.64,3.81,16.84,1.68,16.13.85Z" />
        <path style={{ fill: 'url(#Nepojmenovaný_přechod_66-3)' }} d="M25.38,10a7.15,7.15,0,0,0-7.65,1.18l-.48.46L8.68,20.8a2.12,2.12,0,0,1-.44.35L8,21.4a7.45,7.45,0,0,1-1.39.86,7.17,7.17,0,0,1-6,0,7.13,7.13,0,0,0,9.32,3.61l.2-.08A6.84,6.84,0,0,0,11.52,25a6.45,6.45,0,0,0,.82-.75L20.94,15a2.12,2.12,0,0,1,3-.09A2.18,2.18,0,0,1,24.56,16a2,2,0,0,1,0,.34,2.14,2.14,0,0,1-.3,1.18A7.12,7.12,0,0,0,25.38,10Z" />
        <rect style={{ fill: 'none' }} width="29.6" height="35.8" />
      </svg>
    </Element>
  )
}

// @bundle
export * from './types'
export * from './styles'
export default Logo