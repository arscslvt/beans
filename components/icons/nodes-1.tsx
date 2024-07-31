import React from 'react';
import IconProps from "@/types/icon.types"

function Nodes1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9 5.75C10.1046 5.75 11 4.85457 11 3.75C11 2.64543 10.1046 1.75 9 1.75C7.89543 1.75 7 2.64543 7 3.75C7 4.85457 7.89543 5.75 9 5.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M3.80399 14.75C4.90856 14.75 5.80399 13.8546 5.80399 12.75C5.80399 11.6454 4.90856 10.75 3.80399 10.75C2.69942 10.75 1.80399 11.6454 1.80399 12.75C1.80399 13.8546 2.69942 14.75 3.80399 14.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M14.196 14.75C15.3006 14.75 16.196 13.8546 16.196 12.75C16.196 11.6454 15.3006 10.75 14.196 10.75C13.0914 10.75 12.196 11.6454 12.196 12.75C12.196 13.8546 13.0914 14.75 14.196 14.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M10.998 3.82599C13.052 4.51899 14.628 6.24999 15.102 8.39499" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M2.87101 10.981C2.44401 8.856 3.15501 6.625 4.77601 5.142" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M13.131 14.443C11.504 15.876 9.21701 16.375 7.12201 15.713" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 5.75C10.1046 5.75 11 4.85457 11 3.75C11 2.64543 10.1046 1.75 9 1.75C7.89543 1.75 7 2.64543 7 3.75C7 4.85457 7.89543 5.75 9 5.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M3.80399 14.75C4.90856 14.75 5.80399 13.8546 5.80399 12.75C5.80399 11.6454 4.90856 10.75 3.80399 10.75C2.69942 10.75 1.80399 11.6454 1.80399 12.75C1.80399 13.8546 2.69942 14.75 3.80399 14.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M14.196 14.75C15.3006 14.75 16.196 13.8546 16.196 12.75C16.196 11.6454 15.3006 10.75 14.196 10.75C13.0914 10.75 12.196 11.6454 12.196 12.75C12.196 13.8546 13.0914 14.75 14.196 14.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Nodes1;