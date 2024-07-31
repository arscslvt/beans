import React from 'react';
import IconProps from "@/types/icon.types"

function Trash1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M13.605 4.75L13.099 14.355C13.043 15.417 12.165 16.25 11.102 16.25H6.89698C5.83298 16.25 4.95598 15.417 4.89998 14.355L4.39398 4.75" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M13.605 4.75L13.099 14.355C13.043 15.417 12.165 16.25 11.102 16.25H6.89698C5.83298 16.25 4.95598 15.417 4.89998 14.355L4.39398 4.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M2.75 4.75H15.25" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6.75 4.75V2.75C6.75 2.198 7.198 1.75 7.75 1.75H10.25C10.802 1.75 11.25 2.198 11.25 2.75V4.75" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Trash1;