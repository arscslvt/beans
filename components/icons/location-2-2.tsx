import React from 'react';
import IconProps from "@/types/icon.types"

function Location22(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<circle cx="6" cy="3" fill="none" r="2.25" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="6" x2="6" y1="5.25" y2="9"/>
		<path d="m3.5,7.97c-1.631.297-2.75.867-2.75,1.53,0,.966,2.351,1.75,5.25,1.75s5.25-.784,5.25-1.75c0-.663-1.119-1.233-2.75-1.53" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Location22;