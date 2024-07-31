import React from 'react';
import IconProps from "@/types/icon.types"

function ThumbsUp3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M5.25,7.494c0-.48,.173-.944,.486-1.307L10,1.25h0c.854,.427,1.25,1.428,.92,2.324l-1.17,3.176h4.402c1.313,0,2.269,1.243,1.933,2.512l-1.191,4.5c-.232,.877-1.026,1.488-1.933,1.488H7.25c-1.105,0-2-.895-2-2" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<rect height="8.5" width="3.5" fill="none" rx="1" ry="1" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x="1.75" y="6.75"/>
	</g>
</svg>
	);
}

export default ThumbsUp3;