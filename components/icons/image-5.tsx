import React from 'react';
import IconProps from "@/types/icon.types"

function Image5(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<circle cx="4" cy="4" fill={secondaryfill} r="1" strokeWidth="0"/>
		<path d="m8.75.5H3.25C1.733.5.5,1.733.5,3.25v5.5c0,1.517,1.233,2.75,2.75,2.75h5.5c1.517,0,2.75-1.233,2.75-2.75V3.25c0-1.517-1.233-2.75-2.75-2.75ZM2,3.25c0-.689.561-1.25,1.25-1.25h5.5c.689,0,1.25.561,1.25,1.25v3.025l-1.013-1.013c-.682-.683-1.793-.683-2.475,0l-4.237,4.237c-.163-.211-.276-.463-.276-.749V3.25Z" fill={fill} strokeWidth="0"/>
	</g>
</svg>
	);
}

export default Image5;