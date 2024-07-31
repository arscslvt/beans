import React from 'react';
import IconProps from "@/types/icon.types"

function Satellite2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M7.25,13.75c-1.657,0-3-1.343-3-3" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M7.25,16.75c-3.314,0-6-2.686-6-6" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M8.043,11.043l-1.086-1.086c-.391-.391-.391-1.024,0-1.414L13.146,2.354c.622-.622,1.621-.784,2.339-.277,.915,.645,1.001,1.937,.238,2.7l-6.266,6.266c-.391,.391-1.024,.391-1.414,0Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<rect height="4.25" width="2.5" fill="none" rx="1" ry="1" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} transform="translate(12.297 .851) rotate(135)" x="4.722" y=".847"/>
		<rect height="4.25" width="2.5" fill="none" rx="1" ry="1" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} transform="translate(34.159 9.906) rotate(135)" x="13.778" y="9.903"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="7.5" x2="9.275" y1="4.45" y2="6.225"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="13.55" x2="11.775" y1="10.5" y2="8.725"/>
	</g>
</svg>
	);
}

export default Satellite2;