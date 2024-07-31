import React from 'react';
import IconProps from "@/types/icon.types"

function Microphone5(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m6,0c-1.654,0-3,1.346-3,3v2c0,1.654,1.346,3,3,3s3-1.346,3-3v-2c0-1.654-1.346-3-3-3Z" fill={fill} strokeWidth="0"/>
		<path d="m11.5,5c0-.414-.336-.75-.75-.75s-.75.336-.75.75c0,2.206-1.794,4-4,4s-4-1.794-4-4c0-.414-.336-.75-.75-.75s-.75.336-.75.75c0,2.778,2.072,5.075,4.75,5.443v.807c0,.414.336.75.75.75s.75-.336.75-.75v-.807c2.678-.368,4.75-2.665,4.75-5.443Z" fill={secondaryfill} strokeWidth="0"/>
	</g>
</svg>
	);
}

export default Microphone5;