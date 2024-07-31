import React from 'react';
import IconProps from "@/types/icon.types"

function TriangleWarning1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M7.63801 3.49498L2.21301 12.891C1.60801 13.939 2.36401 15.25 3.57501 15.25H14.425C15.636 15.25 16.392 13.94 15.787 12.891L10.362 3.49498C9.75701 2.44698 8.24301 2.44698 7.63801 3.49498Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M7.63801 3.49498L2.21301 12.891C1.60801 13.939 2.36401 15.25 3.57501 15.25H14.425C15.636 15.25 16.392 13.94 15.787 12.891L10.362 3.49498C9.75701 2.44698 8.24301 2.44698 7.63801 3.49498Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 6.5V10" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 13.569C8.448 13.569 8 13.12 8 12.569C8 12.018 8.448 11.569 9 11.569C9.552 11.569 10 12.018 10 12.569C10 13.12 9.552 13.569 9 13.569Z" fill={fill}/>
	</g>
</svg>
	);
}

export default TriangleWarning1;