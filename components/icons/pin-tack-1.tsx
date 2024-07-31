import React from 'react';
import IconProps from "@/types/icon.types"

function PinTack1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M14.25 12.25C14.161 11.551 13.932 10.49 13.281 9.375C12.946 8.801 12.578 8.347 12.25 8V3.75C12.25 2.645 11.355 1.75 10.25 1.75H7.75C6.645 1.75 5.75 2.645 5.75 3.75V8C5.421 8.347 5.053 8.801 4.719 9.375C4.069 10.49 3.839 11.551 3.75 12.25H14.25Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M9 16.25V12.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M14.25 12.25C14.161 11.551 13.932 10.49 13.281 9.375C12.946 8.801 12.578 8.347 12.25 8V3.75C12.25 2.645 11.355 1.75 10.25 1.75H7.75C6.645 1.75 5.75 2.645 5.75 3.75V8C5.421 8.347 5.053 8.801 4.719 9.375C4.069 10.49 3.839 11.551 3.75 12.25H14.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default PinTack1;