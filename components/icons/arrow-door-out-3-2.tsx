import React from 'react';
import IconProps from "@/types/icon.types"

function ArrowDoorOut32(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M11.75,5.75V3.25c0-.552-.448-1-1-1H4.25c-.552,0-1,.448-1,1V14.75c0,.552,.448,1,1,1h6.5c.552,0,1-.448,1-1v-2.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M3.457,2.648l3.321,2.059c.294,.182,.473,.504,.473,.85v6.887c0,.346-.179,.667-.473,.85l-3.322,2.06" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<polyline fill="none" points="14.5 6.25 17.25 9 14.5 11.75" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="17.25" x2="11.25" y1="9" y2="9"/>
	</g>
</svg>
	);
}

export default ArrowDoorOut32;