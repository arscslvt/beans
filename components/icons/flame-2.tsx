import React from 'react';
import IconProps from "@/types/icon.types"

function Flame2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m6,11.25c1.105,0,2-.898,2-2.007,0-1.524-2-3.243-2-3.243,0,0-2,1.72-2,3.243,0,1.108.895,2.007,2,2.007Z" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="m6,11.25c2.209,0,4-1.789,4-3.995C10,4.22,6,.75,6,.75c0,0-4,3.47-4,6.505,0,2.206,1.791,3.995,4,3.995Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Flame2;