import React from 'react';
import IconProps from "@/types/icon.types"

function Roadmap1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M10.25 11.25H4.044C3.705 11.25 3.389 11.078 3.204 10.793L0.75 7L3.204 3.207C3.388 2.922 3.704 2.75 4.044 2.75H10.25C11.355 2.75 12.25 3.645 12.25 4.75V9.25C12.25 10.355 11.355 11.25 10.25 11.25Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M10.25 11.25H4.044C3.705 11.25 3.389 11.078 3.204 10.793L0.75 7L3.204 3.207C3.388 2.922 3.704 2.75 4.044 2.75H10.25C11.355 2.75 12.25 3.645 12.25 4.75V9.25C12.25 10.355 11.355 11.25 10.25 11.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.895 14C6.192 14.733 6.91 15.25 7.75 15.25H13.956C14.295 15.25 14.611 15.078 14.796 14.793L17.25 11L14.767 7.163" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Roadmap1;