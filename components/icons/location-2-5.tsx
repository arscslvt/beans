import React from 'react';
import IconProps from "@/types/icon.types"

function Location25(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m9,3c0-1.654-1.346-3-3-3s-3,1.346-3,3c0,1.394.96,2.558,2.25,2.893v3.107c0,.414.336.75.75.75s.75-.336.75-.75v-3.107c1.29-.335,2.25-1.5,2.25-2.893Z" fill={secondaryfill} strokeWidth="0"/>
		<path d="m6,12c-2.986,0-6-.773-6-2.5,0-1.067,1.195-1.873,3.366-2.268.407-.076.798.196.872.604s-.196.798-.604.872c-1.583.289-2.093.737-2.143.842.138.202,1.68.95,4.509.95s4.371-.749,4.508-1.046c-.049-.009-.559-.458-2.142-.746-.408-.074-.678-.464-.604-.872.074-.408.468-.677.872-.604,2.17.395,3.366,1.2,3.366,2.268,0,1.727-3.014,2.5-6,2.5Z" fill={fill} strokeWidth="0"/>
	</g>
</svg>
	);
}

export default Location25;