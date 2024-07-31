import React from 'react';
import IconProps from "@/types/icon.types"

function WindowExpandBottomRight1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M8.75 6.75V4.75C8.75 3.64543 7.85457 2.75 6.75 2.75L4.75 2.75C3.64543 2.75 2.75 3.64543 2.75 4.75V6.75C2.75 7.85457 3.64543 8.75 4.75 8.75H6.75C7.85457 8.75 8.75 7.85457 8.75 6.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M8.75 6.75V4.75C8.75 3.64543 7.85457 2.75 6.75 2.75L4.75 2.75C3.64543 2.75 2.75 3.64543 2.75 4.75V6.75C2.75 7.85457 3.64543 8.75 4.75 8.75H6.75C7.85457 8.75 8.75 7.85457 8.75 6.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9.75 12.75H12.75V9.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M12.75 12.75L10 10" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M2.75 10.75V13.25C2.75 14.355 3.645 15.25 4.75 15.25H13.25C14.355 15.25 15.25 14.355 15.25 13.25V4.75C15.25 3.645 14.355 2.75 13.25 2.75H10.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default WindowExpandBottomRight1;