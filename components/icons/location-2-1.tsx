import React from 'react';
import IconProps from "@/types/icon.types"

function Location21(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9 8.25C10.7949 8.25 12.25 6.79493 12.25 5C12.25 3.20507 10.7949 1.75 9 1.75C7.20507 1.75 5.75 3.20507 5.75 5C5.75 6.79493 7.20507 8.25 9 8.25Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M9 8.25C10.7949 8.25 12.25 6.79493 12.25 5C12.25 3.20507 10.7949 1.75 9 1.75C7.20507 1.75 5.75 3.20507 5.75 5C5.75 6.79493 7.20507 8.25 9 8.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 13.25V8.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M12 12.429C14.507 12.744 16.25 13.441 16.25 14.25C16.25 15.355 13.004 16.25 9 16.25C4.996 16.25 1.75 15.355 1.75 14.25C1.75 13.441 3.493 12.743 6 12.429" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Location21;