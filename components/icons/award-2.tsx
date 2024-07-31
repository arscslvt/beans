import React from 'react';
import IconProps from "@/types/icon.types"

function Award2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m6,7.75c-1.281,0-2.39-.696-3-1.723v5.472c0,.399.445.638.777.416l2.223-1.482,2.223,1.482c.332.221.777-.017.777-.416v-5.472c-.61,1.027-1.719,1.723-3,1.723Z" fill={secondaryfill} strokeWidth="0"/>
		<circle cx="6" cy="4.25" fill="none" r="3.5" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Award2;