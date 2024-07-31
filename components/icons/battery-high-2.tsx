import React from 'react';
import IconProps from "@/types/icon.types"

function BatteryHigh2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="4.75" x2="4.75" y1="7.25" y2="10.75"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="7.5" x2="7.5" y1="7.25" y2="10.75"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="10.25" x2="10.25" y1="7.25" y2="10.75"/>
		<rect height="9.5" width="14" fill="none" rx="2" ry="2" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x="1.75" y="4.25"/>
		<rect height="2.5" width="1.5" fill={fill} stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x="15.75" y="7.75"/>
	</g>
</svg>
	);
}

export default BatteryHigh2;