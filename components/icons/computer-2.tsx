import React from 'react';
import IconProps from "@/types/icon.types"

function Computer2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M5.25,10.75H2.75c-.552,0-1-.448-1-1V5.25c0-.552,.448-1,1-1h2.5" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.25,13.25c-1.542,0-2.5,.75-2.5,.75" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<rect height="12.5" width="8.5" fill="none" rx="1.5" ry="1.5" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x="7.75" y="2.75"/>
		<circle cx="12" cy="12" fill={fill} r="1"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="10.75" x2="13.25" y1="5.75" y2="5.75"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="10.75" x2="13.25" y1="8.25" y2="8.25"/>
	</g>
</svg>
	);
}

export default Computer2;