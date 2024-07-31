import React from 'react';
import IconProps from "@/types/icon.types"

function Pointer2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m1.455.814l9.367,3.422c.447.163.434.801-.019.946l-4.258,1.363-1.363,4.258c-.145.454-.782.467-.946.019L.814,1.455c-.146-.399.242-.787.641-.641Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Pointer2;