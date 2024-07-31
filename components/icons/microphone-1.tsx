import React from 'react';
import IconProps from "@/types/icon.types"

function Microphone1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M12.25 5C12.25 3.20507 10.7949 1.75 9 1.75C7.20507 1.75 5.75 3.20507 5.75 5V8C5.75 9.79493 7.20507 11.25 9 11.25C10.7949 11.25 12.25 9.79493 12.25 8V5Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M12.25 5C12.25 3.20507 10.7949 1.75 9 1.75C7.20507 1.75 5.75 3.20507 5.75 5V8C5.75 9.79493 7.20507 11.25 9 11.25C10.7949 11.25 12.25 9.79493 12.25 8V5Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15.25 8C15.25 11.452 12.452 14.25 9 14.25C5.548 14.25 2.75 11.452 2.75 8" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 14.25V16.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Microphone1;