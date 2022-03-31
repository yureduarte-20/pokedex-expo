import React from 'react'
import { SvgXml } from 'react-native-svg';
const icon = `
<svg width="69" height="25" viewBox="0 0 69 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 3C0 1.34315 1.34315 0 3 0H66C67.6569 0 69 1.34315 69 3V22C69 23.6569 67.6569 25 66 25H3C1.34315 25 0 23.6569 0 22V3Z" fill="#EED535"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.45531 5.01716C9.45239 5.00876 9.45866 5 9.46753 5H14.7536C14.7593 5 14.7643 5.00369 14.766 5.00911L17.194 12.8535C17.1965 12.8618 17.1903 12.8703 17.1816 12.8703H13.6624C13.6582 12.8703 13.6551 12.8744 13.6562 12.8785L15.6746 19.9834C15.6785 19.9972 15.6604 20.0062 15.6518 19.9948L7.80828 9.56409C7.80187 9.55556 7.80796 9.5434 7.81862 9.5434H11.0125C11.017 9.5434 11.0201 9.53902 11.0186 9.53481L9.45531 5.01716Z" fill="white"/>
<path d="M31.416 15.3633V16.5H26.0488V8.04492H31.416V9.17578H27.3613V11.6484H31.1992V12.7383H27.3613V15.3633H31.416ZM32.6582 16.5V8.04492H33.9238V16.5H32.6582ZM38.875 11.6895C38.5977 11.3926 38.2402 11.2441 37.8027 11.2441C37.3652 11.2441 37.002 11.3945 36.7129 11.6953C36.4238 11.9922 36.2637 12.377 36.2324 12.8496H39.3145C39.2988 12.373 39.1523 11.9863 38.875 11.6895ZM39.3086 14.6895H40.5098C40.4199 15.2559 40.1309 15.7188 39.6426 16.0781C39.1543 16.4375 38.5586 16.6172 37.8555 16.6172C36.9531 16.6172 36.2422 16.334 35.7227 15.7676C35.207 15.1973 34.9492 14.4238 34.9492 13.4473C34.9492 12.4785 35.207 11.6992 35.7227 11.1094C36.2422 10.5195 36.9355 10.2246 37.8027 10.2246C38.6543 10.2246 39.3301 10.5039 39.8301 11.0625C40.3301 11.6172 40.5801 12.3633 40.5801 13.3008V13.7344H36.2266V13.8105C36.2266 14.3496 36.377 14.7812 36.6777 15.1055C36.9785 15.4297 37.3809 15.5918 37.8848 15.5918C38.2402 15.5918 38.5449 15.5098 38.7988 15.3457C39.0527 15.1816 39.2227 14.9629 39.3086 14.6895ZM46.8555 12.457H45.6484C45.582 12.1094 45.4219 11.8262 45.168 11.6074C44.918 11.3887 44.5957 11.2793 44.2012 11.2793C43.709 11.2793 43.3145 11.4727 43.0176 11.8594C42.7246 12.2422 42.5781 12.7617 42.5781 13.418C42.5781 14.0859 42.7246 14.6094 43.0176 14.9883C43.3145 15.3672 43.7129 15.5566 44.2129 15.5566C44.5996 15.5566 44.916 15.457 45.1621 15.2578C45.4121 15.0547 45.5742 14.7734 45.6484 14.4141H46.8672C46.8008 15.0742 46.5234 15.6074 46.0352 16.0137C45.5508 16.416 44.9395 16.6172 44.2012 16.6172C43.3145 16.6172 42.6074 16.332 42.0801 15.7617C41.5527 15.1875 41.2891 14.4062 41.2891 13.418C41.2891 12.4414 41.5527 11.666 42.0801 11.0918C42.6074 10.5137 43.3105 10.2246 44.1895 10.2246C44.9551 10.2246 45.5762 10.4395 46.0527 10.8691C46.5293 11.2949 46.7969 11.8242 46.8555 12.457ZM48.1328 8.87695H49.4043V10.3359H50.5762V11.3379H49.4043V14.7363C49.4043 15.002 49.4648 15.1973 49.5859 15.3223C49.707 15.4473 49.8965 15.5098 50.1543 15.5098C50.3418 15.5098 50.4805 15.5 50.5703 15.4805V16.4824C50.4141 16.5215 50.1797 16.541 49.8672 16.541C49.2461 16.541 48.8008 16.4141 48.5312 16.1602C48.2656 15.9023 48.1328 15.4746 48.1328 14.877V11.3379H47.2363V10.3359H48.1328V8.87695ZM51.6191 16.5V10.3359H52.8262V11.3848H52.8555C52.957 11.0254 53.1387 10.7441 53.4004 10.541C53.6621 10.3379 53.9746 10.2363 54.3379 10.2363C54.459 10.2363 54.6035 10.252 54.7715 10.2832V11.4609C54.6582 11.4141 54.4688 11.3906 54.2031 11.3906C53.7969 11.3906 53.4746 11.5176 53.2363 11.7715C53.002 12.0254 52.8848 12.3711 52.8848 12.8086V16.5H51.6191ZM55.5977 16.5V10.3359H56.8633V16.5H55.5977ZM56.752 9.22266C56.6074 9.36328 56.4336 9.43359 56.2305 9.43359C56.0273 9.43359 55.8535 9.36328 55.709 9.22266C55.5684 9.08203 55.498 8.91211 55.498 8.71289C55.498 8.50977 55.5684 8.33789 55.709 8.19727C55.8535 8.05664 56.0273 7.98633 56.2305 7.98633C56.4375 7.98633 56.6113 8.05664 56.752 8.19727C56.8965 8.33789 56.9688 8.50977 56.9688 8.71289C56.9688 8.91211 56.8965 9.08203 56.752 9.22266ZM63.4492 12.457H62.2422C62.1758 12.1094 62.0156 11.8262 61.7617 11.6074C61.5117 11.3887 61.1895 11.2793 60.7949 11.2793C60.3027 11.2793 59.9082 11.4727 59.6113 11.8594C59.3184 12.2422 59.1719 12.7617 59.1719 13.418C59.1719 14.0859 59.3184 14.6094 59.6113 14.9883C59.9082 15.3672 60.3066 15.5566 60.8066 15.5566C61.1934 15.5566 61.5098 15.457 61.7559 15.2578C62.0059 15.0547 62.168 14.7734 62.2422 14.4141H63.4609C63.3945 15.0742 63.1172 15.6074 62.6289 16.0137C62.1445 16.416 61.5332 16.6172 60.7949 16.6172C59.9082 16.6172 59.2012 16.332 58.6738 15.7617C58.1465 15.1875 57.8828 14.4062 57.8828 13.418C57.8828 12.4414 58.1465 11.666 58.6738 11.0918C59.2012 10.5137 59.9043 10.2246 60.7832 10.2246C61.5488 10.2246 62.1699 10.4395 62.6465 10.8691C63.123 11.2949 63.3906 11.8242 63.4492 12.457Z" fill="white"/>
</svg>
`;

export const Electric = ({ width, height, style }) => ( <SvgXml style={style} xml={icon} width={width || 69} height={height || 25}/> );