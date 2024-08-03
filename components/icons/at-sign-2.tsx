import React from 'react';
import IconProps from "@/types/icon.types"

function AtSign2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<circle cx="6" cy="6" fill="none" r="2.25" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="m8,10.856c-.616.254-1.292.394-2,.394-2.899,0-5.25-2.351-5.25-5.25S3.101.75,6,.75s5.25,2.351,5.25,5.25c0,1.371-.762,2.25-1.685,2.25-.75,0-1.315-.672-1.315-1.5v-3" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default AtSign2;