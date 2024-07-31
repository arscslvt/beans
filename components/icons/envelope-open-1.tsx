import React from 'react';
import IconProps from "@/types/icon.types"

function EnvelopeOpen1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M16.25 6.754V13.25C16.25 14.355 15.355 15.25 14.25 15.25H3.75C2.645 15.25 1.75 14.355 1.75 13.25V6.75L8.565 10.04C8.84 10.173 9.16 10.173 9.434 10.04L16.249 6.75L16.25 6.754Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M1.75 6.75001C1.75 6.02201 2.146 5.38901 2.784 5.03701L8.517 1.87401C8.818 1.70801 9.182 1.70801 9.483 1.87401L15.216 5.03701C15.854 5.38901 16.25 6.02101 16.25 6.75001" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M16.25 6.754V13.25C16.25 14.355 15.355 15.25 14.25 15.25H3.75C2.645 15.25 1.75 14.355 1.75 13.25V6.75L8.565 10.04C8.84 10.173 9.16 10.173 9.434 10.04L16.249 6.75L16.25 6.754Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default EnvelopeOpen1;