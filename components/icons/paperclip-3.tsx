import React from 'react';
import IconProps from "@/types/icon.types"

function Paperclip3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M7.75,5v6.75c0,.828,.672,1.5,1.5,1.5h0c.828,0,1.5-.672,1.5-1.5V4.75c0-1.657-1.343-3-3-3h0c-1.657,0-3,1.343-3,3v7c0,2.485,2.015,4.5,4.5,4.5h0c2.485,0,4.5-2.015,4.5-4.5V5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Paperclip3;