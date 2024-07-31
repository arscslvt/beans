import React from 'react';
import IconProps from "@/types/icon.types"

function MagnifierFaceWorried1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M7.75 12.75C10.5114 12.75 12.75 10.5114 12.75 7.75C12.75 4.98858 10.5114 2.75 7.75 2.75C4.98858 2.75 2.75 4.98858 2.75 7.75C2.75 10.5114 4.98858 12.75 7.75 12.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M7.75 12.75C10.5114 12.75 12.75 10.5114 12.75 7.75C12.75 4.98858 10.5114 2.75 7.75 2.75C4.98858 2.75 2.75 4.98858 2.75 7.75C2.75 10.5114 4.98858 12.75 7.75 12.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15.25 15.25L11.285 11.285" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.5 8C5.91421 8 6.25 7.66421 6.25 7.25C6.25 6.83579 5.91421 6.5 5.5 6.5C5.08579 6.5 4.75 6.83579 4.75 7.25C4.75 7.66421 5.08579 8 5.5 8Z" fill={fill}/>
		<path d="M10 8C10.4142 8 10.75 7.66421 10.75 7.25C10.75 6.83579 10.4142 6.5 10 6.5C9.58579 6.5 9.25 6.83579 9.25 7.25C9.25 7.66421 9.58579 8 10 8Z" fill={fill}/>
		<path d="M7.75 8C8.578 8 9.25 8.672 9.25 9.5C9.25 9.776 9.026 10 8.75 10H6.75C6.474 10 6.25 9.776 6.25 9.5C6.25 8.672 6.922 8 7.75 8Z" fill={fill}/>
	</g>
</svg>
	);
}

export default MagnifierFaceWorried1;