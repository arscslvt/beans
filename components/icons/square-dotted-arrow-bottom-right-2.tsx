import React from 'react';
import IconProps from "@/types/icon.types"

function SquareDottedArrowBottomRight2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<circle cx="2.75" cy="9" fill={fill} r=".75"/>
		<circle cx="9" cy="2.75" fill={fill} r=".75"/>
		<circle cx="2.75" cy="2.75" fill={fill} r=".75"/>
		<circle cx="2.75" cy="5.875" fill={fill} r=".75"/>
		<circle cx="2.75" cy="12.125" fill={fill} r=".75"/>
		<circle cx="2.75" cy="15.25" fill={fill} r=".75"/>
		<circle cx="15.25" cy="2.75" fill={fill} r=".75"/>
		<circle cx="15.25" cy="5.875" fill={fill} r=".75"/>
		<circle cx="12.125" cy="2.75" fill={fill} r=".75"/>
		<circle cx="5.875" cy="2.75" fill={fill} r=".75"/>
		<circle cx="5.875" cy="15.25" fill={fill} r=".75"/>
		<polyline fill="none" points="9.25 15.25 9.25 9.25 15.25 9.25" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="9.25" x2="15.25" y1="9.25" y2="15.25"/>
	</g>
</svg>
	);
}

export default SquareDottedArrowBottomRight2;