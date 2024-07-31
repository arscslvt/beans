import React from 'react';
import IconProps from "@/types/icon.types"

function Calendar2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="1.25" x2="10.75" y1="4.75" y2="4.75"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="3.75" x2="3.75" y1=".75" y2="1.75"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="8.25" x2="8.25" y1=".75" y2="1.75"/>
		<rect height="9.5" width="9.5" fill="none" rx="2" ry="2" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x="1.25" y="1.75"/>
		<circle cx="4" cy="7.5" fill={secondaryfill} r="1" strokeWidth="0"/>
	</g>
</svg>
	);
}

export default Calendar2;