import React from 'react';
import IconProps from "@/types/icon.types"

function ArrowDoorIn3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M7.25,5.75V3.25c0-.552,.448-1,1-1h6.5c.552,0,1,.448,1,1V14.75c0,.552-.448,1-1,1h-6.5c-.552,0-1-.448-1-1v-2.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15.543,2.648l-3.321,2.059c-.294,.182-.473,.504-.473,.85v6.887c0,.346,.179,.667,.473,.85l3.322,2.06" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<polyline fill="none" points="4 11.75 6.75 9 4 6.25" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="6.75" x2=".75" y1="9" y2="9"/>
	</g>
</svg>
	);
}

export default ArrowDoorIn3;