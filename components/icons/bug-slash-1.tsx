import React from 'react';
import IconProps from "@/types/icon.types"

function BugSlash1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M12.0731 5.92689C11.822 5.81326 11.5434 5.75 11.25 5.75H6.75C5.646 5.75 4.75 6.646 4.75 7.75V11C4.75 11.6568 4.89923 12.2789 5.16562 12.8344L12.0731 5.92689ZM6.64454 14.5374C7.31888 14.9875 8.12897 15.25 9 15.25C11.346 15.25 13.25 13.346 13.25 11V7.93197L6.64454 14.5374Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M6.75 5.75V4.5C6.75 3.257 7.757 2.25 9 2.25C10.243 2.25 11.25 3.257 11.25 4.5V5.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 15.25V12.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.169 12.843C4.9 12.286 4.75 11.661 4.75 11V7.75C4.75 6.645 5.645 5.75 6.75 5.75H11.25C11.543 5.75 11.822 5.813 12.073 5.927" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M13.25 8.25V11C13.25 13.347 11.347 15.25 8.99999 15.25C8.21999 15.25 7.48799 15.04 6.85999 14.672" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4.75 9.75H1.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4.75 7.25C3.231 7.25 2 6.019 2 4.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M13.25 9.75H16.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M13.25 12.25C14.769 12.25 16 13.481 16 15" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M2 16L16 2" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default BugSlash1;