import React from 'react';
import IconProps from "@/types/icon.types"

function Files22(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M6.25,10.75H3.25c-.552,0-1-.448-1-1V2.75c0-.552,.448-1,1-1H7.25l2,2v1" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15.75,9.25v6c0,.552-.448,1-1,1h-5c-.552,0-1-.448-1-1v-7c0-.552,.448-1,1-1h4l2,2Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<polyline fill="none" points="6.75 1.75 6.75 3.75 8.75 3.75" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<polyline fill="none" points="13.75 7.25 13.75 9.25 15.75 9.25" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Files22;