import React from 'react';
import IconProps from "@/types/icon.types"

function Bookmark2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m10.25,11.25l-4.25-3.25-4.25,3.25V2.75C1.75,1.645,2.645.75,3.75.75h4.5c1.105,0,2,.895,2,2v8.5Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Bookmark2;