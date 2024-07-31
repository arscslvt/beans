import React from 'react';
import IconProps from "@/types/icon.types"

function Filter1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M10.5 14.75L7.5 16.25V9L2.75 2.75H15.25L10.5 9V14.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M10.5 14.75L7.5 16.25V9L2.75 2.75H15.25L10.5 9V14.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Filter1;