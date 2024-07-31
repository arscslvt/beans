import React from 'react';
import IconProps from "@/types/icon.types"

function ClipboardCheck2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m7.75,1.75h.5c1.105,0,2,.895,2,2v5.5c0,1.105-.895,2-2,2H3.75c-1.105,0-2-.895-2-2V3.75c0-1.105.895-2,2-2h.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<rect height="2.5" width="3.5" fill="none" rx=".5" ry=".5" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x="4.25" y=".75"/>
		<polyline fill="none" points="4 7.39 5.334 8.722 8 5.171" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default ClipboardCheck2;