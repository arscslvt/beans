import React from 'react';
import IconProps from "@/types/icon.types"

function Trash2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="1" x2="11" y1="2.25" y2="2.25"/>
		<path d="m4.75,2.25v-1c0-.276.224-.5.5-.5h1.5c.276,0,.5.224.5.5v1" fill={secondaryfill} stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="m9.5,4.75l-.195,5.058c-.031.805-.693,1.442-1.499,1.442h-3.613c-.806,0-1.468-.637-1.499-1.442l-.195-5.058" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Trash2;