import React from 'react';
import IconProps from "@/types/icon.types"

function GasPump1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M3.25 9V15.75H11.75V9H3.25Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M3.25 15.75V4.25C3.25 3.145 4.145 2.25 5.25 2.25H9.75C10.855 2.25 11.75 3.145 11.75 4.25V15.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M1.75 15.75H13.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M3.25 8.75H11.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M14.75 4.25L16.957 6.457C17.145 6.645 17.25 6.899 17.25 7.164V11.75C17.25 12.578 16.578 13.25 15.75 13.25C14.922 13.25 14.25 12.578 14.25 11.75V10.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M16 5.5V7.25C16 7.802 16.448 8.25 17 8.25H17.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default GasPump1;