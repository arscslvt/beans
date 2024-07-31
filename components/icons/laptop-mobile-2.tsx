import React from 'react';
import IconProps from "@/types/icon.types"

function LaptopMobile2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<rect height="5.5" width="8.5" fill="none" rx="1.5" ry="1.5" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} transform="translate(25.5 -1.5) rotate(90)" x="9.25" y="9.25"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="1.75" x2="8" y1="13" y2="13"/>
		<path d="M15.25,5v-.25c0-1.105-.895-2-2-2H4.75c-1.105,0-2,.895-2,2v6.375c0,1.036,.839,1.875,1.875,1.875h0" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default LaptopMobile2;