import React from 'react';
import IconProps from "@/types/icon.types"

function AspectRatioSquare21(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M4.75 15.25L13.25 15.25C14.3546 15.25 15.25 14.3546 15.25 13.25L15.25 4.75C15.25 3.64543 14.3546 2.75 13.25 2.75L4.75 2.75C3.64543 2.75 2.75 3.64543 2.75 4.75L2.75 13.25C2.75 14.3546 3.64543 15.25 4.75 15.25Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M4.75 15.25L13.25 15.25C14.3546 15.25 15.25 14.3546 15.25 13.25L15.25 4.75C15.25 3.64543 14.3546 2.75 13.25 2.75L4.75 2.75C3.64543 2.75 2.75 3.64543 2.75 4.75L2.75 13.25C2.75 14.3546 3.64543 15.25 4.75 15.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M12.75 8.25V5.25H9.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M8.25 12.75H5.25V9.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default AspectRatioSquare21;