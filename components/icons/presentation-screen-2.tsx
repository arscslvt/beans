import React from 'react';
import IconProps from "@/types/icon.types"

function PresentationScreen2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="4.292" x2="3" y1="8.25" y2="11"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="7.708" x2="9" y1="8.25" y2="11"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="6" x2="6" y1=".75" y2="1.75"/>
		<rect height="6.5" width="9.5" fill="none" rx="1.5" ry="1.5" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x="1.25" y="1.75"/>
	</g>
</svg>
	);
}

export default PresentationScreen2;