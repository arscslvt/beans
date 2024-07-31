import React from 'react';
import IconProps from "@/types/icon.types"

function ClipboardSlash1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M14.5733 3.92664C14.2596 3.23263 13.5614 2.75 12.75 2.75H11.75V3.25C11.75 3.80228 11.3023 4.25 10.75 4.25H7.25C6.69772 4.25 6.25 3.80228 6.25 3.25V2.75H5.25C4.145 2.75 3.25 3.645 3.25 4.75V14.25C3.25 14.5435 3.31316 14.8223 3.42664 15.0733L14.5733 3.92664ZM5.43196 16.25H12.75C13.855 16.25 14.75 15.355 14.75 14.25V6.93196L5.43196 16.25Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M14.573 3.927C14.259 3.233 13.561 2.75 12.75 2.75H11.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.78497 16.25H12.75C13.855 16.25 14.75 15.355 14.75 14.25V7.285" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6.25 2.75H5.25C4.145 2.75 3.25 3.645 3.25 4.75V14.25C3.25 14.543 3.313 14.822 3.427 15.073" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M10.75 1.25H7.25C6.69772 1.25 6.25 1.69772 6.25 2.25V3.25C6.25 3.80228 6.69772 4.25 7.25 4.25H10.75C11.3023 4.25 11.75 3.80228 11.75 3.25V2.25C11.75 1.69772 11.3023 1.25 10.75 1.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M2.25 16.25L16 2.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default ClipboardSlash1;