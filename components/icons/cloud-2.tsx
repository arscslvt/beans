import React from 'react';
import IconProps from "@/types/icon.types"

function Cloud2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m8.75,4.25c-.243,0-.473.046-.695.11-.485-1.51-1.884-2.61-3.555-2.61C2.429,1.75.75,3.429.75,5.5s1.679,3.75,3.75,3.75h4.25c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Cloud2;