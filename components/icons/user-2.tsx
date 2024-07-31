import React from 'react';
import IconProps from "@/types/icon.types"

function User2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<circle cx="6" cy="2.491" fill="none" r="1.75" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="m9.425,10.458c.551-.255.759-.92.458-1.446-.773-1.349-2.215-2.262-3.882-2.262s-3.11.912-3.882,2.262c-.301.526-.093,1.192.458,1.446,2.283,1.056,4.566,1.056,6.849,0Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default User2;