import React from 'react';
import IconProps from "@/types/icon.types"

function FacePlus1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M10.8503 1.98825C10.3322 2.40046 10 3.03644 10 3.75C10 4.99264 11.0074 6 12.25 6H12.5V6.25C12.5 7.49264 13.5074 8.5 14.75 8.5C15.293 8.5 15.7911 8.30764 16.1798 7.98734C16.2261 8.31826 16.25 8.65634 16.25 9C16.25 13.0041 13.0041 16.25 9 16.25C4.99594 16.25 1.75 13.0041 1.75 9C1.75 4.99594 4.99594 1.75 9 1.75C9.63949 1.75 10.2596 1.83279 10.8503 1.98825Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M11.25 11.758C10.778 12.504 9.946 13 9 13C8.054 13 7.222 12.504 6.75 11.758" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6 10C6.55228 10 7 9.55228 7 9C7 8.44772 6.55228 8 6 8C5.44772 8 5 8.44772 5 9C5 9.55228 5.44772 10 6 10Z" fill={fill}/>
		<path d="M12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10Z" fill={fill}/>
		<path d="M14.75 1.25V6.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M17.25 3.75H12.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M10.557 1.922C10.055 1.812 9.535 1.75 9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 13.004 4.996 16.25 9 16.25C13.004 16.25 16.25 13.004 16.25 9C16.25 8.753 16.237 8.509 16.213 8.268" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default FacePlus1;