import React from 'react';
import IconProps from "@/types/icon.types"

function TriangleWarning5(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m11.704,7.687L7.915,1.11C7.516.417,6.8.003,6,.003s-1.516.414-1.914,1.107L.296,7.687c-.399.692-.398,1.518,0,2.209s1.115,1.104,1.914,1.104h7.578c.799,0,1.515-.413,1.914-1.104s.4-1.518,0-2.209ZM5.25,3.5c0-.414.336-.75.75-.75s.75.336.75.75v2.75c0,.414-.336.75-.75.75s-.75-.336-.75-.75v-2.75Zm.75,6c-.482,0-.875-.393-.875-.875s.393-.875.875-.875.875.393.875.875-.393.875-.875.875Z" fill={fill} strokeWidth="0"/>
	</g>
</svg>
	);
}

export default TriangleWarning5;