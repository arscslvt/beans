import React from 'react';
import IconProps from "@/types/icon.types"

function Battery2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<rect height="9.5" width="14" fill="none" rx="2" ry="2" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x="1.75" y="4.25"/>
		<rect height="2.5" width="1.5" fill={fill} stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x="15.75" y="7.75"/>
	</g>
</svg>
	);
}

export default Battery2;