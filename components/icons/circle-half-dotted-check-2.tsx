import React from 'react';
import IconProps from "@/types/icon.types"

function CircleHalfDottedCheck2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m6,.75c2.899,0,5.25,2.351,5.25,5.25s-2.351,5.25-5.25,5.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<polyline fill="none" points="3.747 6.5 5.25 8 8.253 4" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<circle cx="3.375" cy="1.453" fill={secondaryfill} r=".75" strokeWidth="0"/>
		<circle cx="1.453" cy="3.375" fill={secondaryfill} r=".75" strokeWidth="0"/>
		<circle cx=".75" cy="6" fill={secondaryfill} r=".75" strokeWidth="0"/>
		<circle cx="1.453" cy="8.625" fill={secondaryfill} r=".75" strokeWidth="0"/>
		<circle cx="3.375" cy="10.547" fill={secondaryfill} r=".75" strokeWidth="0"/>
	</g>
</svg>
	);
}

export default CircleHalfDottedCheck2;