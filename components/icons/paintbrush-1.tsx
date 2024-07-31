import React from 'react';
import IconProps from "@/types/icon.types"

function Paintbrush1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M1.75 14.706C4.453 15.518 6.646 15.586 8.439 13.751C9.52 12.666 9.52 10.906 8.439 9.81999C7.358 8.73399 5.613 8.71799 4.523 9.81999C2.75 11.612 4.298 13.314 1.75 14.706Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M6.95599 9.04399L13.534 2.46599C14.155 1.84499 15.163 1.84499 15.784 2.46599C16.405 3.08699 16.405 4.09499 15.784 4.71599L9.20599 11.294" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M1.75 14.706C4.453 15.518 6.646 15.586 8.439 13.751C9.52 12.666 9.52 10.906 8.439 9.81999C7.358 8.73399 5.613 8.71799 4.523 9.81999C2.75 11.612 4.298 13.314 1.75 14.706Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Paintbrush1;