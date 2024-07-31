import React from 'react';
import IconProps from "@/types/icon.types"

function Star1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9 1.75L11.24 6.289L16.25 7.017L12.625 10.551L13.481 15.54L9 13.185L4.519 15.54L5.375 10.551L1.75 7.017L6.76 6.289L9 1.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M9 1.75L11.24 6.289L16.25 7.017L12.625 10.551L13.481 15.54L9 13.185L4.519 15.54L5.375 10.551L1.75 7.017L6.76 6.289L9 1.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Star1;