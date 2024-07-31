import React from 'react';
import IconProps from "@/types/icon.types"

function Flame1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M14.5 10.733C14.5 13.78 12.038 16.25 9 16.25C10.519 16.25 11.75 15.015 11.75 13.491C11.75 11.395 9 9 9 9C9 9 6.25 11.396 6.25 13.491C6.25 15.015 7.481 16.25 9 16.25C5.962 16.25 3.5 13.78 3.5 10.733C3.5 6.542 9 1.75 9 1.75C9 1.75 14.5 6.542 14.5 10.733Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M9 16.25C10.519 16.25 11.75 15.015 11.75 13.491C11.75 11.395 9 9 9 9C9 9 6.25 11.396 6.25 13.491C6.25 15.015 7.481 16.25 9 16.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 16.25C12.038 16.25 14.5 13.78 14.5 10.733C14.5 6.542 9 1.75 9 1.75C9 1.75 3.5 6.542 3.5 10.733C3.5 13.78 5.962 16.25 9 16.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Flame1;