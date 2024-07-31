import React from 'react';
import IconProps from "@/types/icon.types"

function Anchor1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9 5.25C9.9665 5.25 10.75 4.4665 10.75 3.5C10.75 2.5335 9.9665 1.75 9 1.75C8.0335 1.75 7.25 2.5335 7.25 3.5C7.25 4.4665 8.0335 5.25 9 5.25Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M16.25 10.531L15.25 9C15.25 12.452 12.452 15.25 9 15.25C5.548 15.25 2.75 12.452 2.75 9L1.75 10.531" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 5.25V16.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 5.25C9.9665 5.25 10.75 4.4665 10.75 3.5C10.75 2.5335 9.9665 1.75 9 1.75C8.0335 1.75 7.25 2.5335 7.25 3.5C7.25 4.4665 8.0335 5.25 9 5.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M7.25 8.25H10.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Anchor1;