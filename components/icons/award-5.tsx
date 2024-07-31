import React from 'react';
import IconProps from "@/types/icon.types"

function Award5(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m6,9.5c-1.107,0-2.136-.331-3-.896v2.895c0,.399.445.638.777.416l2.223-1.482,2.223,1.482c.332.221.777-.017.777-.416v-2.895c-.864.565-1.893.896-3,.896Z" fill={secondaryfill} strokeWidth="0"/>
		<circle cx="6" cy="4" fill={fill} r="4" strokeWidth="0"/>
	</g>
</svg>
	);
}

export default Award5;