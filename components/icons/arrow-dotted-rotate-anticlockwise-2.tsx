import React from 'react';
import IconProps from "@/types/icon.types"

function ArrowDottedRotateAnticlockwise2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m1.282,3.694C2.136,1.951,3.928.75,6,.75c2.899,0,5.25,2.351,5.25,5.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<polyline fill="none" points="4.25 3.75 1.25 3.75 1.25 .75" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<circle cx="6" cy="11.25" fill={secondaryfill} r=".75" strokeWidth="0"/>
		<circle cx="3.375" cy="10.547" fill={secondaryfill} r=".75" strokeWidth="0"/>
		<circle cx="1.453" cy="8.625" fill={secondaryfill} r=".75" strokeWidth="0"/>
		<circle cx="8.625" cy="10.547" fill={secondaryfill} r=".75" strokeWidth="0"/>
		<circle cx="10.547" cy="8.625" fill={secondaryfill} r=".75" strokeWidth="0"/>
	</g>
</svg>
	);
}

export default ArrowDottedRotateAnticlockwise2;