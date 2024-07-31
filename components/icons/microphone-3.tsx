import React from 'react';
import IconProps from "@/types/icon.types"

function Microphone3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<rect height="9.5" width="6.5" fill="none" rx="3.25" ry="3.25" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x="5.75" y="1.75"/>
		<path d="M15.25,8c0,3.452-2.798,6.25-6.25,6.25h0c-3.452,0-6.25-2.798-6.25-6.25" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="9" x2="9" y1="14.25" y2="16.25"/>
	</g>
</svg>
	);
}

export default Microphone3;