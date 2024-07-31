import React from 'react';
import IconProps from "@/types/icon.types"

function BatteryHigh1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M13.75 4.25H3.75C2.64543 4.25 1.75 5.14543 1.75 6.25V11.75C1.75 12.8546 2.64543 13.75 3.75 13.75H13.75C14.8546 13.75 15.75 12.8546 15.75 11.75V6.25C15.75 5.14543 14.8546 4.25 13.75 4.25Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M4.75 7.25V10.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M7.5 7.25V10.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M10.25 7.25V10.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M13.75 4.25H3.75C2.64543 4.25 1.75 5.14543 1.75 6.25V11.75C1.75 12.8546 2.64543 13.75 3.75 13.75H13.75C14.8546 13.75 15.75 12.8546 15.75 11.75V6.25C15.75 5.14543 14.8546 4.25 13.75 4.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M17.25 7.75H15.75V10.25H17.25V7.75Z" fill={fill} stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default BatteryHigh1;