import React from 'react';
import IconProps from "@/types/icon.types"

function Calendar5(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<circle cx="4" cy="7" fill={secondaryfill} r="1" strokeWidth="0"/>
		<path d="m9,1.525v-.775c0-.414-.336-.75-.75-.75s-.75.336-.75.75v.75h-3v-.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75v.775c-1.398.129-2.5,1.294-2.5,2.725v5c0,1.517,1.233,2.75,2.75,2.75h5.5c1.517,0,2.75-1.233,2.75-2.75v-5c0-1.431-1.102-2.596-2.5-2.725Zm1,7.725c0,.689-.561,1.25-1.25,1.25H3.25c-.689,0-1.25-.561-1.25-1.25v-4.25h8v4.25Z" fill={fill} strokeWidth="0"/>
	</g>
</svg>
	);
}

export default Calendar5;