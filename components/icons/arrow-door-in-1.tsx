import React from 'react';
import IconProps from "@/types/icon.types"

function ArrowDoorIn1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M15.544 2.64801L12.223 4.70701C11.929 4.88901 11.75 5.21101 11.75 5.55701V12.444C11.75 12.79 11.929 13.111 12.223 13.294L15.545 15.354" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M7.25 5.75V3.25C7.25 2.698 7.698 2.25 8.25 2.25H14.75C15.302 2.25 15.75 2.698 15.75 3.25V14.75C15.75 15.302 15.302 15.75 14.75 15.75H8.25C7.698 15.75 7.25 15.302 7.25 14.75V12.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4 11.75L6.75 9L4 6.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6.75 9H0.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15.543 2.64801L12.222 4.70701C11.928 4.88901 11.749 5.21101 11.749 5.55701V12.444C11.749 12.79 11.928 13.111 12.222 13.294L15.544 15.354" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default ArrowDoorIn1;