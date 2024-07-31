import React from 'react';
import IconProps from "@/types/icon.types"

function Print3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M5.75,5.25V2.75c0-.552,.448-1,1-1h4.5c.552,0,1,.448,1,1v2.5" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.75,13.25h-1.5c-1.105,0-2-.895-2-2V7.25c0-1.105,.895-2,2-2H13.75c1.105,0,2,.895,2,2v4c0,1.105-.895,2-2,2h-1.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M12.25,9.75v5.5c0,.552-.448,1-1,1H6.75c-.552,0-1-.448-1-1v-5.5h6.5Z" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Print3;