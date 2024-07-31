import React from 'react';
import IconProps from "@/types/icon.types"

function WindowChartLine1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M3.75 15.25L14.25 15.25C15.3546 15.25 16.25 14.3546 16.25 13.25V4.75C16.25 3.64543 15.3546 2.75 14.25 2.75L3.75 2.75C2.64543 2.75 1.75 3.64543 1.75 4.75L1.75 13.25C1.75 14.3546 2.64543 15.25 3.75 15.25Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M4.75 12L6.5 10L7.5 11.25L9.5 7.75L11 10.25L13.25 5.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M3.75 15.25L14.25 15.25C15.3546 15.25 16.25 14.3546 16.25 13.25V4.75C16.25 3.64543 15.3546 2.75 14.25 2.75L3.75 2.75C2.64543 2.75 1.75 3.64543 1.75 4.75L1.75 13.25C1.75 14.3546 2.64543 15.25 3.75 15.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4.25 6C4.66421 6 5 5.66421 5 5.25C5 4.83579 4.66421 4.5 4.25 4.5C3.83579 4.5 3.5 4.83579 3.5 5.25C3.5 5.66421 3.83579 6 4.25 6Z" fill={fill}/>
		<path d="M6.75 6C7.16421 6 7.5 5.66421 7.5 5.25C7.5 4.83579 7.16421 4.5 6.75 4.5C6.33579 4.5 6 4.83579 6 5.25C6 5.66421 6.33579 6 6.75 6Z" fill={fill}/>
	</g>
</svg>
	);
}

export default WindowChartLine1;