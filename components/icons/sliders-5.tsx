import React from 'react';
import IconProps from "@/types/icon.types"

function Sliders5(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m11.25,9.5H.75c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h10.5c.414,0,.75.336.75.75s-.336.75-.75.75Z" fill={secondaryfill} strokeWidth="0"/>
		<path d="m11.25,4H.75c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h10.5c.414,0,.75.336.75.75s-.336.75-.75.75Z" fill={fill} strokeWidth="0"/>
		<circle cx="4.5" cy="8.75" fill={secondaryfill} r="2.5" strokeWidth="0"/>
		<circle cx="7.5" cy="3.25" fill={fill} r="2.5" strokeWidth="0"/>
	</g>
</svg>
	);
}

export default Sliders5;