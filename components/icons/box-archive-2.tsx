import React from 'react';
import IconProps from "@/types/icon.types"

function BoxArchive2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m10.25,4.5v4.25c0,1.105-.895,2-2,2h-2.25s-2.25,0-2.25,0c-1.105,0-2-.895-2-2v-4.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<rect height="3" width="10.5" fill="none" rx="1" ry="1" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x=".75" y="1.25"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="5" x2="7" y1="6.75" y2="6.75"/>
	</g>
</svg>
	);
}

export default BoxArchive2;