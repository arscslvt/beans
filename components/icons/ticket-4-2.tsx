import React from 'react';
import IconProps from "@/types/icon.types"

function Ticket42(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<circle cx="6.75" cy="7.563" fill={secondaryfill} r=".75"/>
		<circle cx="6.75" cy="10.437" fill={secondaryfill} r=".75"/>
		<path d="M14.25,3.75h-6c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5h-1.5c-1.105,0-2,.896-2,2v6.5c0,1.104,.895,2,2,2h1.5c0-.828,.672-1.5,1.5-1.5s1.5,.672,1.5,1.5h6c1.105,0,2-.896,2-2V5.75c0-1.104-.895-2-2-2Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Ticket42;