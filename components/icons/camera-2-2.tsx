import React from 'react';
import IconProps from "@/types/icon.types"

function Camera22(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<circle cx="3.25" cy="5.75" fill={secondaryfill} r=".75" strokeWidth="0"/>
		<circle cx="7.25" cy="7.25" fill={secondaryfill} r="1" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<rect height="8" width="10.5" fill="none" rx="2" ry="2" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x=".75" y="3.25"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="2.75" x2="4.75" y1=".75" y2=".75"/>
	</g>
</svg>
	);
}

export default Camera22;