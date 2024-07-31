import React from 'react';
import IconProps from "@/types/icon.types"

function Computer1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M14.75 2.75H9.25C8.42157 2.75 7.75 3.42157 7.75 4.25V13.75C7.75 14.5784 8.42157 15.25 9.25 15.25H14.75C15.5784 15.25 16.25 14.5784 16.25 13.75V4.25C16.25 3.42157 15.5784 2.75 14.75 2.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M5.25 10.75H2.75C2.198 10.75 1.75 10.302 1.75 9.75V5.25C1.75 4.698 2.198 4.25 2.75 4.25H5.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M14.75 2.75H9.25C8.42157 2.75 7.75 3.42157 7.75 4.25V13.75C7.75 14.5784 8.42157 15.25 9.25 15.25H14.75C15.5784 15.25 16.25 14.5784 16.25 13.75V4.25C16.25 3.42157 15.5784 2.75 14.75 2.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.25 13.25C3.708 13.25 2.75 14 2.75 14" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill={fill}/>
		<path d="M10.75 5.75H13.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M10.75 8.25H13.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Computer1;