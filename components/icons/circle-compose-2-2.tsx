import React from 'react';
import IconProps from "@/types/icon.types"

function CircleCompose22(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M16.182,8c.045,.327,.068,.661,.068,1,0,4.004-3.246,7.25-7.25,7.25S1.75,13.004,1.75,9,4.996,1.75,9,1.75c.339,0,.673,.023,1,.068" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6.75,11.25s2.12-.12,2.836-.836l6.25-6.25c.552-.552,.552-1.448,0-2-.552-.552-1.448-.552-2,0l-6.25,6.25c-.716,.716-.836,2.836-.836,2.836Z" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default CircleCompose22;