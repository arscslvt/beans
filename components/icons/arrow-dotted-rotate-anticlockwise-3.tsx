import React from 'react';
import IconProps from "@/types/icon.types"

function ArrowDottedRotateAnticlockwise3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<polyline fill="none" points="1.872 3.305 2.28 6.25 5.224 5.843" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M16.232,8.484c-.265-3.763-3.401-6.734-7.232-6.734-3.031,0-5.627,1.86-6.71,4.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<circle cx="14.127" cy="14.127" fill={secondaryfill} r=".75"/>
		<circle cx="9" cy="16.25" fill={secondaryfill} r=".75"/>
		<circle cx="3.873" cy="14.127" fill={secondaryfill} r=".75"/>
		<circle cx="1.75" cy="9" fill={secondaryfill} r=".75"/>
		<circle cx="15.698" cy="11.774" fill={secondaryfill} r=".75"/>
		<circle cx="11.774" cy="15.698" fill={secondaryfill} r=".75"/>
		<circle cx="6.226" cy="15.698" fill={secondaryfill} r=".75"/>
		<circle cx="2.302" cy="11.774" fill={secondaryfill} r=".75"/>
	</g>
</svg>
	);
}

export default ArrowDottedRotateAnticlockwise3;