import React from 'react';
import IconProps from "@/types/icon.types"

function Bell2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m10.75,8.25c-.828,0-1.5-.672-1.5-1.5v-2.75c0-1.795-1.455-3.25-3.25-3.25-1.795,0-3.25,1.455-3.25,3.25v2.75c0,.828-.672,1.5-1.5,1.5h9.5Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="m6,12c1.105,0,2-.895,2-2h-4c0,1.105.895,2,2,2Z" fill={secondaryfill} strokeWidth="0"/>
	</g>
</svg>
	);
}

export default Bell2;