import React from 'react';
import IconProps from "@/types/icon.types"

function Stopwatch1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9 16.25C12.4518 16.25 15.25 13.4518 15.25 10C15.25 6.54822 12.4518 3.75 9 3.75C5.54822 3.75 2.75 6.54822 2.75 10C2.75 13.4518 5.54822 16.25 9 16.25Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M6.75 1.25H11.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 1.25V3.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 16.25C12.4518 16.25 15.25 13.4518 15.25 10C15.25 6.54822 12.4518 3.75 9 3.75C5.54822 3.75 2.75 6.54822 2.75 10C2.75 13.4518 5.54822 16.25 9 16.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6.70203 7.702L9.00003 10" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M14.25 2.75L16.25 4.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Stopwatch1;