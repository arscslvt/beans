import React from 'react';
import IconProps from "@/types/icon.types"

function Users1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M16.494 11.3635C16.688 11.8785 16.381 12.4475 15.858 12.6225C14.9814 12.9153 13.8077 13.1965 12.4107 13.2436C12.3924 13.1857 12.3724 13.1278 12.3506 13.0698L12.3505 13.0697C11.7372 11.4421 10.5393 10.0973 9.00919 9.29768C9.82907 8.64292 10.8681 8.2515 12 8.2515C14.058 8.2515 15.809 9.54549 16.494 11.3635Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M12 5.75C13.1046 5.75 14 4.85457 14 3.75C14 2.64543 13.1046 1.75 12 1.75C10.8954 1.75 10 2.64543 10 3.75C10 4.85457 10.8954 5.75 12 5.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M5.75 8.25C6.85457 8.25 7.75 7.35457 7.75 6.25C7.75 5.14543 6.85457 4.25 5.75 4.25C4.64543 4.25 3.75 5.14543 3.75 6.25C3.75 7.35457 4.64543 8.25 5.75 8.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9.609 15.122C10.132 14.947 10.439 14.378 10.245 13.863C9.56 12.045 7.809 10.751 5.751 10.751C3.693 10.751 1.942 12.045 1.257 13.863C1.063 14.379 1.37 14.948 1.893 15.122C2.855 15.443 4.174 15.75 5.752 15.75C7.33 15.75 8.648 15.443 9.609 15.122Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M12 5.75C13.1046 5.75 14 4.85457 14 3.75C14 2.64543 13.1046 1.75 12 1.75C10.8954 1.75 10 2.64543 10 3.75C10 4.85457 10.8954 5.75 12 5.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M12.749 13.227C13.997 13.15 15.053 12.891 15.858 12.622C16.381 12.447 16.688 11.878 16.494 11.363C15.809 9.545 14.058 8.251 12 8.251C11.023 8.251 10.115 8.543 9.35699 9.044" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Users1;