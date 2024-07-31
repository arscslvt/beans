import React from 'react';
import IconProps from "@/types/icon.types"

function HalfDottedCirclePlay5(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m7.724,5.482l-2.308-1.385c-.403-.242-.916.048-.916.518v2.771c0,.47.513.76.916.518l2.308-1.385c.391-.235.391-.802,0-1.037Z" fill={secondaryfill} strokeWidth="0"/>
		<path d="m7.282,11.093l-.009-.002.009.002Z" fill={fill} strokeWidth="0"/>
		<path d="m6.001,12c-.414,0-.75-.336-.75-.75s.336-.75.75-.75c2.48,0,4.499-2.019,4.499-4.5S8.481,1.5,6,1.5c-.414,0-.75-.336-.75-.75s.336-.75.75-.75c3.309,0,6,2.691,6,6s-2.691,6-5.999,6Z" fill={fill} strokeWidth="0"/>
		<circle cx=".75" cy="6" fill={secondaryfill} r=".75" strokeWidth="0"/>
		<circle cx="1.453" cy="3.375" fill={secondaryfill} r=".75" strokeWidth="0"/>
		<circle cx="3.375" cy="1.453" fill={secondaryfill} r=".75" strokeWidth="0"/>
		<circle cx="1.453" cy="8.625" fill={secondaryfill} r=".75" strokeWidth="0"/>
		<circle cx="3.375" cy="10.547" fill={secondaryfill} r=".75" strokeWidth="0"/>
	</g>
</svg>
	);
}

export default HalfDottedCirclePlay5;