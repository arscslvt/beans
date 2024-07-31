import React from 'react';
import IconProps from "@/types/icon.types"

function Laptop1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M4.25 14.75C3.145 14.75 2.25 13.855 2.25 12.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H13.75C14.855 2.75 15.75 3.645 15.75 4.75V12.75C15.75 13.855 14.855 14.75 13.75 14.75" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M4.25 14.75C3.145 14.75 2.25 13.855 2.25 12.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H13.75C14.855 2.75 15.75 3.645 15.75 4.75V12.75C15.75 13.855 14.855 14.75 13.75 14.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M0.75 14.75H17.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Laptop1;