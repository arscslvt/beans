import React from 'react';
import IconProps from "@/types/icon.types"

function Shop2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="3.75" x2="3.75" y1="16.25" y2="9.5"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="14.25" x2="14.25" y1="9.5" y2="16.25"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="1.75" x2="16.25" y1="16.25" y2="16.25"/>
		<path d="M13.668,1.75H4.331c-.359,0-.691,.193-.869,.505l-1.706,2.995c.475,1.031,1.51,1.75,2.72,1.75,.908,0,1.712-.412,2.262-1.049,.55,.637,1.354,1.049,2.262,1.049s1.711-.411,2.261-1.048c.55,.637,1.354,1.048,2.261,1.048,1.209,0,2.245-.719,2.72-1.75l-1.704-2.995c-.178-.312-.51-.505-.869-.505Z" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M7.25,16v-3c0-.966,.784-1.75,1.75-1.75h0c.966,0,1.75,.784,1.75,1.75v3" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Shop2;