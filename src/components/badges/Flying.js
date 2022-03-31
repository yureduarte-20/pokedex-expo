import React from 'react'
import { SvgXml } from 'react-native-svg';
const icon = `<svg width="62" height="25" viewBox="0 0 62 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 3C0 1.34315 1.34315 0 3 0H59C60.6569 0 62 1.34315 62 3V22C62 23.6569 60.6569 25 59 25H3C1.34315 25 0 23.6569 0 22V3Z" fill="#748FC9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2357 19C12.4331 19 14.3143 17.7788 15.0909 16.0476C15.1004 16.0264 11.9729 16.8603 12.0726 16.5656C12.1171 16.4339 14.0343 15.7336 15.4311 14.9166C16.2339 14.4471 16.6036 13.4531 16.6036 13.4531C16.6036 13.4531 15.2511 14.1098 14.5673 14.2764C13.1894 14.6122 11.9765 14.576 11.9765 14.541C11.9765 14.4654 13.9905 14.0827 16.7898 12.3769C18.1065 11.5745 18.4641 10.1925 18.4641 10.1925C18.4641 10.1925 17.0165 11.0547 16.1414 11.3394C14.0661 12.0145 12.1723 12.218 12.1723 12.1266C12.1723 11.931 13.8389 11.4727 15.606 10.6165C16.5247 10.1714 17.3204 9.58975 18.2424 8.94296C19.7512 7.88473 20 6 20 6C20 6 18.512 6.95977 17.7858 7.2785C14.7893 8.59369 12.1434 9.28357 10.2357 9.43293C7.35594 9.6584 5 11.6677 5 14.2764C5 16.8852 7.3441 19 10.2357 19Z" fill="white"/>
<path d="M27.5703 16.5H26.2578V8.04492H31.5371V9.17578H27.5703V11.8535H31.2031V12.9609H27.5703V16.5ZM32.5742 16.5V8.04492H33.8398V16.5H32.5742ZM35.75 18.7969C35.5117 18.7969 35.3398 18.7871 35.2344 18.7676V17.7422C35.2969 17.7578 35.4336 17.7656 35.6445 17.7656C35.9414 17.7656 36.1738 17.6973 36.3418 17.5605C36.5098 17.4277 36.6426 17.2031 36.7402 16.8867C36.7402 16.8828 36.7598 16.8184 36.7988 16.6934L36.8516 16.5059L34.625 10.3359H35.9961L37.5605 15.3516H37.5781L39.1426 10.3359H40.4785L38.1641 16.8223C37.9023 17.5684 37.5957 18.084 37.2441 18.3691C36.8926 18.6543 36.3945 18.7969 35.75 18.7969ZM41.2637 16.5V10.3359H42.5293V16.5H41.2637ZM42.418 9.22266C42.2734 9.36328 42.0996 9.43359 41.8965 9.43359C41.6934 9.43359 41.5195 9.36328 41.375 9.22266C41.2344 9.08203 41.1641 8.91211 41.1641 8.71289C41.1641 8.50977 41.2344 8.33789 41.375 8.19727C41.5195 8.05664 41.6934 7.98633 41.8965 7.98633C42.1035 7.98633 42.2773 8.05664 42.418 8.19727C42.5625 8.33789 42.6348 8.50977 42.6348 8.71289C42.6348 8.91211 42.5625 9.08203 42.418 9.22266ZM43.8242 16.5V10.3359H45.0312V11.3672H45.0605C45.2324 11.0078 45.4824 10.7285 45.8105 10.5293C46.1387 10.3301 46.5352 10.2305 47 10.2305C47.6758 10.2305 48.2012 10.4336 48.5762 10.8398C48.9512 11.2422 49.1387 11.7988 49.1387 12.5098V16.5H47.8672V12.7559C47.8672 12.2871 47.7559 11.9316 47.5332 11.6895C47.3145 11.4434 46.9883 11.3203 46.5547 11.3203C46.1094 11.3203 45.7539 11.4648 45.4883 11.7539C45.2227 12.043 45.0898 12.4277 45.0898 12.9082V16.5H43.8242ZM52.9883 15.4746C53.4844 15.4746 53.8809 15.2871 54.1777 14.9121C54.4785 14.5371 54.6289 14.0332 54.6289 13.4004C54.6289 12.7676 54.4785 12.2598 54.1777 11.877C53.8809 11.4941 53.4844 11.3027 52.9883 11.3027C52.5 11.3027 52.1094 11.4922 51.8164 11.8711C51.5273 12.25 51.3828 12.7598 51.3828 13.4004C51.3828 14.041 51.5273 14.5469 51.8164 14.918C52.1094 15.2891 52.5 15.4746 52.9883 15.4746ZM53 18.8203C52.2812 18.8203 51.6719 18.6484 51.1719 18.3047C50.6758 17.9609 50.3887 17.5195 50.3105 16.9805H51.582C51.6719 17.2383 51.8477 17.4453 52.1094 17.6016C52.375 17.7578 52.6875 17.8359 53.0469 17.8359C53.5352 17.8359 53.9199 17.707 54.2012 17.4492C54.4824 17.1953 54.623 16.8555 54.623 16.4297V15.416H54.5996C54.4238 15.7559 54.1621 16.0254 53.8145 16.2246C53.4707 16.4238 53.082 16.5234 52.6484 16.5234C51.8711 16.5234 51.25 16.2422 50.7852 15.6797C50.3203 15.1133 50.0879 14.3516 50.0879 13.3945C50.0879 12.4258 50.3203 11.6582 50.7852 11.0918C51.2539 10.5215 51.8848 10.2363 52.6777 10.2363C53.1113 10.2363 53.5 10.3398 53.8438 10.5469C54.1875 10.75 54.4531 11.0312 54.6406 11.3906H54.6641V10.3359H55.8945V16.3887C55.8945 17.123 55.6309 17.7109 55.1035 18.1523C54.5801 18.5977 53.8789 18.8203 53 18.8203Z" fill="white"/>
</svg>
`;

export const Flying = ({ width, height, style }) => ( <SvgXml style={style} xml={icon} width={width || 62} height={height || 25}/> );