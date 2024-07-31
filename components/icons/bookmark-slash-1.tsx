import React from 'react';
import IconProps from "@/types/icon.types"

function BookmarkSlash1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M14.25 3.75C14.25 2.645 13.355 1.75 12.25 1.75H5.75C4.645 1.75 3.75 2.645 3.75 3.75V14.25L14.25 3.75ZM14.25 6.96733L7.402 13.8153L9 12.75L14.25 16.25V6.96733Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M3.75 14.25V3.75C3.75 2.645 4.645 1.75 5.75 1.75H12.25C13.355 1.75 14.25 2.645 14.25 3.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M14.25 7.285V16.25L9 12.75L7.812 13.542" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M2 16L16 2" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default BookmarkSlash1;