import React from 'react';
import IconProps from "@/types/icon.types"

function Align3Horizontal2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<rect height="12.5" width="4.5" fill="none" rx="1.5" ry="1.5" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} transform="translate(-4 22) rotate(-90)" x="6.75" y="6.75"/>
		<rect height="6.5" width="4.5" fill="none" rx="1.5" ry="1.5" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} transform="translate(4 14) rotate(-90)" x="6.75" y="1.75"/>
	</g>
</svg>
	);
}

export default Align3Horizontal2;