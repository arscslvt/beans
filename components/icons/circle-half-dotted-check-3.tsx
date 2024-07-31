import React from 'react';
import IconProps from "@/types/icon.types"

function CircleHalfDottedCheck3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9,1.75c4.004,0,7.25,3.246,7.25,7.25s-3.246,7.25-7.25,7.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<polyline fill="none" points="5.75 9.25 8 11.75 12.25 6.25" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<circle cx="3.873" cy="14.127" fill={fill} r=".75"/>
		<circle cx="1.75" cy="9" fill={fill} r=".75"/>
		<circle cx="3.873" cy="3.873" fill={fill} r=".75"/>
		<circle cx="6.226" cy="15.698" fill={fill} r=".75"/>
		<circle cx="2.302" cy="11.774" fill={fill} r=".75"/>
		<circle cx="2.302" cy="6.226" fill={fill} r=".75"/>
		<circle cx="6.226" cy="2.302" fill={fill} r=".75"/>
	</g>
</svg>
	);
}

export default CircleHalfDottedCheck3;