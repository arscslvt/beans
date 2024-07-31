import React from 'react';
import IconProps from "@/types/icon.types"

function Notification1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M14.5 5.75C15.7426 5.75 16.75 4.74264 16.75 3.5C16.75 2.25736 15.7426 1.25 14.5 1.25C13.2574 1.25 12.25 2.25736 12.25 3.5C12.25 4.74264 13.2574 5.75 14.5 5.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M14.75 8.5V13.75C14.75 14.855 13.855 15.75 12.75 15.75H4.25C3.145 15.75 2.25 14.855 2.25 13.75V5.25C2.25 4.145 3.145 3.25 4.25 3.25H9.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M14.5 5.75C15.7426 5.75 16.75 4.74264 16.75 3.5C16.75 2.25736 15.7426 1.25 14.5 1.25C13.2574 1.25 12.25 2.25736 12.25 3.5C12.25 4.74264 13.2574 5.75 14.5 5.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Notification1;