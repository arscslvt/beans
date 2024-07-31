import React from 'react';
import IconProps from "@/types/icon.types"

function Toggle31(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M10.75 9C10.75 11.6234 8.62335 13.75 6 13.75H12C14.6234 13.75 16.75 11.6234 16.75 9C16.75 6.37665 14.6234 4.25 12 4.25H6C8.62335 4.25 10.75 6.37665 10.75 9Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M6 13.75H12C14.623 13.75 16.75 11.623 16.75 9C16.75 6.377 14.623 4.25 12 4.25H6" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6 13.75C8.62335 13.75 10.75 11.6234 10.75 9C10.75 6.37665 8.62335 4.25 6 4.25C3.37665 4.25 1.25 6.37665 1.25 9C1.25 11.6234 3.37665 13.75 6 13.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Toggle31;