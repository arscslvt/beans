import React from 'react';
import IconProps from "@/types/icon.types"

function BookmarkSlash2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M3.75,14.25V3.75c0-1.105,.895-2,2-2h6.5c1.105,0,2,.895,2,2" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<polyline fill="none" points="14.25 7.285 14.25 16.25 9 12.75 7.812 13.542" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="2" x2="16" y1="16" y2="2"/>
	</g>
</svg>
	);
}

export default BookmarkSlash2;