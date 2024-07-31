import React from 'react';
import IconProps from "@/types/icon.types"

function Envelope5(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m6,5.935l5.962-2.556c-.183-1.34-1.323-2.378-2.712-2.378H2.75C1.361,1.001.221,2.04.038,3.38l5.962,2.555Z" fill={secondaryfill} strokeWidth="0"/>
		<path d="m6.295,7.441c-.094.041-.195.061-.295.061s-.201-.02-.295-.061L0,4.996v3.255c0,1.517,1.233,2.75,2.75,2.75h6.5c1.517,0,2.75-1.233,2.75-2.75v-3.256l-5.705,2.445Z" fill={fill} strokeWidth="0"/>
	</g>
</svg>
	);
}

export default Envelope5;