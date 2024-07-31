import React from 'react';
import IconProps from "@/types/icon.types"

function DrawCompass1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9 6.75C10.1046 6.75 11 5.85457 11 4.75C11 3.64543 10.1046 2.75 9 2.75C7.89543 2.75 7 3.64543 7 4.75C7 5.85457 7.89543 6.75 9 6.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M9 1.5V2.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M8.045 6.507L2.75 16.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M13.484 13L15.25 16.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9.95499 6.507L12.343 10.901" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 6.75C10.1046 6.75 11 5.85457 11 4.75C11 3.64543 10.1046 2.75 9 2.75C7.89543 2.75 7 3.64543 7 4.75C7 5.85457 7.89543 6.75 9 6.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M14 9.649C12.729 10.946 10.959 11.75 9 11.75C7.041 11.75 5.27 10.945 4 9.649" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default DrawCompass1;