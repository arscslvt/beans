import React from 'react';
import IconProps from "@/types/icon.types"

function Laptop2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m3.25,9.75c-.828,0-1.5-.672-1.5-1.5V3.25c0-.828.672-1.5,1.5-1.5h5.5c.828,0,1.5.672,1.5,1.5v5c0,.828-.672,1.5-1.5,1.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1=".75" x2="11.25" y1="9.75" y2="9.75"/>
	</g>
</svg>
	);
}

export default Laptop2;