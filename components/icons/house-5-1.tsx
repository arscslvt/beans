import React from 'react';
import IconProps from "@/types/icon.types"

function House51(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9 1.75L2.655 6.45C2.4 6.639 2.25 6.937 2.25 7.254V13.75C2.25 14.855 3.145 15.75 4.25 15.75H5.75V11C5.75 10.31 6.31 9.75 7 9.75C7.69 9.75 8.25 10.31 8.25 11V15.75H13.75C14.855 15.75 15.75 14.855 15.75 13.75V7.254C15.75 6.937 15.6 6.639 15.345 6.45L9 1.75Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M5.75 15.75V11C5.75 10.31 6.31 9.75 7 9.75C7.69 9.75 8.25 10.31 8.25 11V15.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M10.75 9.75H12.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M2.655 6.45L9 1.75L15.345 6.45C15.6 6.639 15.75 6.937 15.75 7.254V13.75C15.75 14.855 14.855 15.75 13.75 15.75H4.25C3.145 15.75 2.25 14.855 2.25 13.75V7.254C2.25 6.937 2.4 6.639 2.655 6.45Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M13.75 2.75V5.269" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default House51;