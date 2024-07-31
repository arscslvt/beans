import React from 'react';
import IconProps from "@/types/icon.types"

function Tag2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<circle cx="4" cy="4" fill={secondaryfill} r="1" strokeWidth="0"/>
		<path d="m1.25,2.25v3.086c0,.265.105.52.293.707l4.105,4.105c.781.781,2.047.781,2.828,0l1.672-1.672c.781-.781.781-2.047,0-2.828L6.043,1.543c-.188-.188-.442-.293-.707-.293h-3.086c-.552,0-1,.448-1,1Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Tag2;