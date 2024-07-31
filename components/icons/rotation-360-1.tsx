import React from 'react';
import IconProps from "@/types/icon.types"

function Rotation3601(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9 10.75C9.9665 10.75 10.75 9.9665 10.75 9C10.75 8.0335 9.9665 7.25 9 7.25C8.0335 7.25 7.25 8.0335 7.25 9C7.25 9.9665 8.0335 10.75 9 10.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M9 10.75C9.9665 10.75 10.75 9.9665 10.75 9C10.75 8.0335 9.9665 7.25 9 7.25C8.0335 7.25 7.25 8.0335 7.25 9C7.25 9.9665 8.0335 10.75 9 10.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M11.469 15.207C10.765 16.023 9.916 16.5 9 16.5C6.572 16.5 4.603 13.142 4.603 9C4.603 4.858 6.572 1.5 9 1.5C11.428 1.5 13.397 4.858 13.397 9C13.397 10.384 13.177 11.681 12.794 12.793" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M7.966 4.645C8.304 4.618 8.65 4.604 9 4.604C13.142 4.604 16.5 6.572 16.5 9.001C16.5 11.43 13.142 13.398 9 13.398C4.858 13.398 1.5 11.428 1.5 9C1.5 7.383 2.989 5.97 5.207 5.206" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Rotation3601;