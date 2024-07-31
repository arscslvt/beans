import React from 'react';
import IconProps from "@/types/icon.types"

function Paperclip5(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m6,12.001c-2.481,0-4.5-2.019-4.5-4.5V3.251C1.5,1.459,2.958.001,4.75.001s3.25,1.458,3.25,3.25v4.25c0,1.103-.897,2-2,2s-2-.897-2-2v-3.75c0-.414.336-.75.75-.75s.75.336.75.75v3.75c0,.276.224.5.5.5s.5-.224.5-.5V3.251c0-.965-.785-1.75-1.75-1.75s-1.75.785-1.75,1.75v4.25c0,1.654,1.346,3,3,3s3-1.346,3-3v-3.75c0-.414.336-.75.75-.75s.75.336.75.75v3.75c0,2.481-2.019,4.5-4.5,4.5Z" fill={fill} strokeWidth="0"/>
	</g>
</svg>
	);
}

export default Paperclip5;