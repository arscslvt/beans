import React from 'react';
import IconProps from "@/types/icon.types"

function Bug1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M6.75 5.75H11.25C12.354 5.75 13.25 6.646 13.25 7.75V11C13.25 13.346 11.346 15.25 9 15.25C6.654 15.25 4.75 13.346 4.75 11V7.75C4.75 6.646 5.646 5.75 6.75 5.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M9 15.25V10.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6.75 5.75V4.5C6.75 3.257 7.757 2.25 9 2.25C10.243 2.25 11.25 3.257 11.25 4.5V5.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4.75 9.75H1.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4.75 7.25C3.231 7.25 2 6.019 2 4.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4.75 12.25C3.231 12.25 2 13.481 2 15" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M13.25 9.75H16.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M13.25 7.25C14.769 7.25 16 6.019 16 4.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M13.25 12.25C14.769 12.25 16 13.481 16 15" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6.75 5.75H11.25C12.354 5.75 13.25 6.646 13.25 7.75V11C13.25 13.346 11.346 15.25 9 15.25C6.654 15.25 4.75 13.346 4.75 11V7.75C4.75 6.646 5.646 5.75 6.75 5.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Bug1;