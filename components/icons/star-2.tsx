import React from 'react';
import IconProps from "@/types/icon.types"

function Star2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m6.237.897l1.479,2.996,3.307.481c.217.032.304.298.147.451l-2.393,2.333.565,3.294c.037.216-.19.381-.384.279l-2.958-1.555-2.958,1.555c-.194.102-.421-.063-.384-.279l.565-3.294L.83,4.825c-.157-.153-.07-.42.147-.451l3.307-.481,1.479-2.996c.097-.197.377-.197.474,0Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Star2;