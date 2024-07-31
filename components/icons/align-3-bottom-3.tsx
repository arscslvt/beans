import React from 'react';
import IconProps from "@/types/icon.types"

function Align3Bottom3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<rect height="14" width="6" fill={fill} rx="2.25" ry="2.25" x="2" y="2"/>
		<rect height="8" width="6" fill={secondaryfill} rx="2.25" ry="2.25" x="10" y="8"/>
	</g>
</svg>
	);
}

export default Align3Bottom3;