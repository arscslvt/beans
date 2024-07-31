import React from 'react';
import IconProps from "@/types/icon.types"

function Microphone2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m10.75,5c0,2.619-2.131,4.75-4.75,4.75S1.25,7.619,1.25,5" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<rect height="6.5" width="4.5" fill="none" rx="2.25" ry="2.25" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x="3.75" y=".75"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="6" x2="6" y1="9.75" y2="11.25"/>
	</g>
</svg>
	);
}

export default Microphone2;