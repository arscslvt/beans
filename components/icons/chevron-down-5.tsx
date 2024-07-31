import React from 'react';
import IconProps from "@/types/icon.types"

function ChevronDown5(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m6,9.25c-.192,0-.384-.073-.53-.22L1.22,4.78c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l3.72,3.72,3.72-3.72c.293-.293.768-.293,1.061,0s.293.768,0,1.061l-4.25,4.25c-.146.146-.338.22-.53.22Z" fill={fill} strokeWidth="0"/>
	</g>
</svg>
	);
}

export default ChevronDown5;