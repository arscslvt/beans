import React from 'react';
import IconProps from "@/types/icon.types"

function AwardCertificate1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M14.75 7.25647C14.6672 7.25217 14.5839 7.25 14.5 7.25C11.8766 7.25 9.75 9.37665 9.75 12C9.75 13.2382 10.2238 14.3658 11 15.2113V16.25H4.25C3.145 16.25 2.25 15.355 2.25 14.25V3.75C2.25 2.645 3.145 1.75 4.25 1.75H12.75C13.855 1.75 14.75 2.645 14.75 3.75V7V7.25647Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M14.5 14.5C13.678 14.5 12.956 14.098 12.5 13.486V17.5C12.5 17.702 12.622 17.885 12.809 17.962C12.996 18.041 13.21 17.997 13.354 17.854L14.5 16.708L15.646 17.854C15.742 17.95 15.87 18 16 18C16.064 18 16.13 17.988 16.191 17.962C16.378 17.885 16.5 17.702 16.5 17.5V13.486C16.044 14.098 15.322 14.5 14.5 14.5Z" fill={fill}/>
		<path d="M10.75 16.25H4.25C3.145 16.25 2.25 15.355 2.25 14.25V3.75C2.25 2.645 3.145 1.75 4.25 1.75H12.75C13.855 1.75 14.75 2.645 14.75 3.75V7" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.25 5.75H11.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.25 9H8.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.25 12.25H8.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M14.5 14.5C15.8807 14.5 17 13.3807 17 12C17 10.6193 15.8807 9.5 14.5 9.5C13.1193 9.5 12 10.6193 12 12C12 13.3807 13.1193 14.5 14.5 14.5Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default AwardCertificate1;