import React from 'react';
import IconProps from "@/types/icon.types"

function Image2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m2.32,10.516l4.723-4.723c.391-.391,1.024-.391,1.414,0l2.293,2.293" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<circle cx="4" cy="4" fill={secondaryfill} r="1" strokeWidth="0"/>
		<rect height="9.5" width="9.5" fill="none" rx="2" ry="2" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x="1.25" y="1.25"/>
	</g>
</svg>
	);
}

export default Image2;