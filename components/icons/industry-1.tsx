import React from 'react';
import IconProps from "@/types/icon.types"

function Industry1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M3.43101 4.75H4.06901C4.59401 4.75 5.02901 5.155 5.06601 5.679L5.67301 14.179C5.71401 14.758 5.25601 15.25 4.67601 15.25H2.82401C2.24401 15.25 1.78501 14.758 1.82701 14.179L2.43401 5.679C2.47101 5.156 2.90701 4.75 3.43101 4.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M3.43101 4.75H4.06901C4.59401 4.75 5.02901 5.155 5.06601 5.679L5.67301 14.179C5.71401 14.758 5.25601 15.25 4.67601 15.25H2.82401C2.24401 15.25 1.78501 14.758 1.82701 14.179L2.43401 5.679C2.47101 5.156 2.90701 4.75 3.43101 4.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4 2.598C4.306 2.09 4.863 1.75 5.5 1.75H7.25C7.946 1.75 8.548 1.343 8.829 0.753998" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M7.75903 8.721L11.25 5.75V10L16.25 5.75V14.25C16.25 14.802 15.802 15.25 15.25 15.25H4.67603" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M12.75 12H13.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M8.75 12H9.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Industry1;