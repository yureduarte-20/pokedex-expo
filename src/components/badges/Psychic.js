import React from 'react'
import { SvgXml } from 'react-native-svg';
const icon = `
<svg width="71" height="25" viewBox="0 0 71 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 3C0 1.34315 1.34315 0 3 0H68C69.6569 0 71 1.34315 71 3V22C71 23.6569 69.6569 25 68 25H3C1.34314 25 0 23.6569 0 22V3Z" fill="#EA5D60"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.3661 17.4579C18.3661 17.4579 16.4745 18.975 12.7103 18.3472C9.85441 17.8709 8.33122 14.7227 8.33122 13.0305C8.33122 9.01847 11.3007 8.10545 13.3082 8.10545C15.3157 8.10545 16.6254 10.0627 16.6254 11.5781C16.6254 13.0935 15.5536 14.419 13.8856 14.419C12.2177 14.419 11.7237 13.248 11.7237 12.1714C11.7237 11.0949 12.5947 10.7156 13.389 10.7156C14.1834 10.7156 14.4554 11.3938 14.4554 11.9766C14.4554 12.5595 14.0031 12.7683 13.6259 12.7683C13.2487 12.7683 13.2114 12.578 13.067 12.378C12.9227 12.178 13.2512 11.421 12.7103 11.421C12.1694 11.421 12.0686 12.2912 12.0686 12.2912C12.0686 12.2912 12.2658 13.9711 13.8856 13.9421C15.5055 13.9131 16.2739 12.6608 16.0506 11.421C15.8273 10.1811 14.624 8.86365 12.5122 9.12987C10.4004 9.39609 9.53824 11.5298 9.91829 13.8101C10.2983 16.0904 13.0301 17.4116 15.1779 16.9362C17.3258 16.4609 19.465 14.9059 19.465 10.9635C19.465 7.02109 16.0506 4.65132 11.9792 5.04187C7.9078 5.43242 5.38047 8.9919 5.54224 13.2687C5.70401 17.5455 9.76218 19.8747 13.1938 19.9948C16.6254 20.1148 18.7291 18.1284 18.7291 18.1284C18.7291 18.1284 19.2022 17.7065 19.0167 17.377C18.8312 17.0476 18.3661 17.4579 18.3661 17.4579Z" fill="white"/>
<path d="M26.1699 8.04492H29.3398C30.1602 8.04492 30.8281 8.30273 31.3438 8.81836C31.8633 9.33398 32.123 10.002 32.123 10.8223C32.123 11.6465 31.8594 12.3184 31.332 12.8379C30.8086 13.3535 30.1309 13.6113 29.2988 13.6113H27.4824V16.5H26.1699V8.04492ZM27.4824 9.15234V12.5098H28.9883C29.5586 12.5098 30 12.3633 30.3125 12.0703C30.625 11.7773 30.7812 11.3633 30.7812 10.8281C30.7812 10.2969 30.625 9.88477 30.3125 9.5918C30.0039 9.29883 29.5645 9.15234 28.9941 9.15234H27.4824ZM32.75 12.082C32.75 11.5312 32.9727 11.084 33.418 10.7402C33.8633 10.3965 34.4453 10.2246 35.1641 10.2246C35.8477 10.2246 36.4082 10.3984 36.8457 10.7461C37.2871 11.0898 37.5176 11.5371 37.5371 12.0879H36.3477C36.3164 11.8066 36.1934 11.5859 35.9785 11.4258C35.7637 11.2656 35.4805 11.1855 35.1289 11.1855C34.7852 11.1855 34.5078 11.2617 34.2969 11.4141C34.0898 11.5664 33.9863 11.7637 33.9863 12.0059C33.9863 12.3809 34.3008 12.6465 34.9297 12.8027L35.9668 13.043C36.5879 13.1914 37.0273 13.3945 37.2852 13.6523C37.5469 13.9062 37.6777 14.2617 37.6777 14.7188C37.6777 15.2812 37.4395 15.7383 36.9629 16.0898C36.4902 16.4414 35.875 16.6172 35.1172 16.6172C34.3945 16.6172 33.8047 16.4453 33.3477 16.1016C32.8945 15.7578 32.6426 15.3008 32.5918 14.7305H33.8457C33.8965 15.0273 34.0352 15.2559 34.2617 15.416C34.4883 15.5723 34.793 15.6504 35.1758 15.6504C35.5547 15.6504 35.8535 15.5781 36.0723 15.4336C36.2949 15.2852 36.4062 15.0859 36.4062 14.8359C36.4062 14.6367 36.3398 14.4785 36.207 14.3613C36.0742 14.2441 35.8477 14.1445 35.5273 14.0625L34.4258 13.793C33.3086 13.5234 32.75 12.9531 32.75 12.082ZM39.2715 18.7969C39.0332 18.7969 38.8613 18.7871 38.7559 18.7676V17.7422C38.8184 17.7578 38.9551 17.7656 39.166 17.7656C39.4629 17.7656 39.6953 17.6973 39.8633 17.5605C40.0312 17.4277 40.1641 17.2031 40.2617 16.8867C40.2617 16.8828 40.2812 16.8184 40.3203 16.6934L40.373 16.5059L38.1465 10.3359H39.5176L41.082 15.3516H41.0996L42.6641 10.3359H44L41.6855 16.8223C41.4238 17.5684 41.1172 18.084 40.7656 18.3691C40.4141 18.6543 39.916 18.7969 39.2715 18.7969ZM49.8594 12.457H48.6523C48.5859 12.1094 48.4258 11.8262 48.1719 11.6074C47.9219 11.3887 47.5996 11.2793 47.2051 11.2793C46.7129 11.2793 46.3184 11.4727 46.0215 11.8594C45.7285 12.2422 45.582 12.7617 45.582 13.418C45.582 14.0859 45.7285 14.6094 46.0215 14.9883C46.3184 15.3672 46.7168 15.5566 47.2168 15.5566C47.6035 15.5566 47.9199 15.457 48.166 15.2578C48.416 15.0547 48.5781 14.7734 48.6523 14.4141H49.8711C49.8047 15.0742 49.5273 15.6074 49.0391 16.0137C48.5547 16.416 47.9434 16.6172 47.2051 16.6172C46.3184 16.6172 45.6113 16.332 45.084 15.7617C44.5566 15.1875 44.293 14.4062 44.293 13.418C44.293 12.4414 44.5566 11.666 45.084 11.0918C45.6113 10.5137 46.3145 10.2246 47.1934 10.2246C47.959 10.2246 48.5801 10.4395 49.0566 10.8691C49.5332 11.2949 49.8008 11.8242 49.8594 12.457ZM50.8145 16.5V8.04492H52.0684V11.3672H52.0977C52.2695 11.0039 52.5215 10.7246 52.8535 10.5293C53.1855 10.3301 53.584 10.2305 54.0488 10.2305C54.7207 10.2305 55.248 10.4375 55.6309 10.8516C56.0176 11.2656 56.2109 11.8242 56.2109 12.5273V16.5H54.9395V12.7734C54.9395 12.3125 54.8242 11.9551 54.5938 11.7012C54.3672 11.4473 54.0332 11.3203 53.5918 11.3203C53.127 11.3203 52.7578 11.4688 52.4844 11.7656C52.2148 12.0586 52.0801 12.4492 52.0801 12.9375V16.5H50.8145ZM57.4766 16.5V10.3359H58.7422V16.5H57.4766ZM58.6309 9.22266C58.4863 9.36328 58.3125 9.43359 58.1094 9.43359C57.9062 9.43359 57.7324 9.36328 57.5879 9.22266C57.4473 9.08203 57.377 8.91211 57.377 8.71289C57.377 8.50977 57.4473 8.33789 57.5879 8.19727C57.7324 8.05664 57.9062 7.98633 58.1094 7.98633C58.3164 7.98633 58.4902 8.05664 58.6309 8.19727C58.7754 8.33789 58.8477 8.50977 58.8477 8.71289C58.8477 8.91211 58.7754 9.08203 58.6309 9.22266ZM65.3281 12.457H64.1211C64.0547 12.1094 63.8945 11.8262 63.6406 11.6074C63.3906 11.3887 63.0684 11.2793 62.6738 11.2793C62.1816 11.2793 61.7871 11.4727 61.4902 11.8594C61.1973 12.2422 61.0508 12.7617 61.0508 13.418C61.0508 14.0859 61.1973 14.6094 61.4902 14.9883C61.7871 15.3672 62.1855 15.5566 62.6855 15.5566C63.0723 15.5566 63.3887 15.457 63.6348 15.2578C63.8848 15.0547 64.0469 14.7734 64.1211 14.4141H65.3398C65.2734 15.0742 64.9961 15.6074 64.5078 16.0137C64.0234 16.416 63.4121 16.6172 62.6738 16.6172C61.7871 16.6172 61.0801 16.332 60.5527 15.7617C60.0254 15.1875 59.7617 14.4062 59.7617 13.418C59.7617 12.4414 60.0254 11.666 60.5527 11.0918C61.0801 10.5137 61.7832 10.2246 62.6621 10.2246C63.4277 10.2246 64.0488 10.4395 64.5254 10.8691C65.002 11.2949 65.2695 11.8242 65.3281 12.457Z" fill="white"/>
</svg>
`;

export const Psychic = ({ width, height, style }) => ( <SvgXml xml={icon} width={width || 61} height={height || 25} style={style}/> );