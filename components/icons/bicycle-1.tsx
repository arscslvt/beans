import React from 'react';
import IconProps from "@/types/icon.types"

function Bicycle1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M6.06746 8.86299C5.56311 8.47839 4.93323 8.25 4.25 8.25C2.59315 8.25 1.25 9.59315 1.25 11.25C1.25 12.9069 2.59315 14.25 4.25 14.25C5.90685 14.25 7.25 12.9069 7.25 11.25H5.259C4.845 11.25 4.611 10.776 4.861 10.447L6.06746 8.86299Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M13.75 14.25C15.4069 14.25 16.75 12.9069 16.75 11.25C16.75 9.59315 15.4069 8.25 13.75 8.25C12.0931 8.25 10.75 9.59315 10.75 11.25C10.75 12.9069 12.0931 14.25 13.75 14.25Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M13.75 14.25C15.4069 14.25 16.75 12.9069 16.75 11.25C16.75 9.59315 15.4069 8.25 13.75 8.25C12.0931 8.25 10.75 9.59315 10.75 11.25C10.75 12.9069 12.0931 14.25 13.75 14.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M7.25 11.25C7.25 12.907 5.907 14.25 4.25 14.25C2.593 14.25 1.25 12.907 1.25 11.25C1.25 9.593 2.593 8.25 4.25 8.25C4.933 8.25 5.564 8.479 6.068 8.863" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4.25 4.75H6.232L8.703 10.554C8.843 10.884 8.601 11.25 8.243 11.25H5.259C4.845 11.25 4.611 10.776 4.861 10.447L7.296 7.25H12.046" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M13.75 11.25L10.344 3.25H13.75C14.44 3.25 15 3.81 15 4.5C15 5.105 14.571 5.609 14 5.725" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Bicycle1;