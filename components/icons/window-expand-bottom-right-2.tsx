import React from 'react';
import IconProps from "@/types/icon.types"

function WindowExpandBottomRight2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<rect height="6" width="6" fill="none" rx="2" ry="2" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} transform="translate(11.5) rotate(90)" x="2.75" y="2.75"/>
		<polyline fill="none" points="9.75 12.75 12.75 12.75 12.75 9.75" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="12.75" x2="10" y1="12.75" y2="10"/>
		<path d="M2.75,10.75v2.5c0,1.105,.895,2,2,2H13.25c1.105,0,2-.895,2-2V4.75c0-1.105-.895-2-2-2h-2.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default WindowExpandBottomRight2;