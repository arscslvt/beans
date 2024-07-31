import React from 'react';
import IconProps from "@/types/icon.types";

function Accessibility1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9 3.75C9.82843 3.75 10.5 3.07843 10.5 2.25C10.5 1.42157 9.82843 0.75 9 0.75C8.17157 0.75 7.5 1.42157 7.5 2.25C7.5 3.07843 8.17157 3.75 9 3.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M9 3.75C9.82843 3.75 10.5 3.07843 10.5 2.25C10.5 1.42157 9.82843 0.75 9 0.75C8.17157 0.75 7.5 1.42157 7.5 2.25C7.5 3.07843 8.17157 3.75 9 3.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M7.25 16.5V6.24001" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M10.75 6.24001V16.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M2.75 5.75C4.501 6.05 6.61 6.281 9 6.281C10.777 6.281 12.894 6.153 15.25 5.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M7.25 11.25H10.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Accessibility1;