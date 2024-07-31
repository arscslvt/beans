import React from 'react';
import IconProps from "@/types/icon.types"

function Paperclip2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m4.75,3.75v3.75c0,.69.56,1.25,1.25,1.25h0c.69,0,1.25-.56,1.25-1.25V3.25c0-1.381-1.119-2.5-2.5-2.5h0c-1.381,0-2.5,1.119-2.5,2.5v4.25c0,2.071,1.679,3.75,3.75,3.75h0c2.071,0,3.75-1.679,3.75-3.75v-3.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Paperclip2;