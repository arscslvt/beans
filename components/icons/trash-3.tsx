import React from 'react';
import IconProps from "@/types/icon.types"

function Trash3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m13.474,7.25l-.374,7.105c-.056,1.062-.934,1.895-1.997,1.895h-4.205c-1.064,0-1.941-.833-1.997-1.895l-.374-7.105" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="m6.75,4.75v-2c0-.552.448-1,1-1h2.5c.552,0,1,.448,1,1v2" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="2.75" x2="15.25" y1="4.75" y2="4.75"/>
	</g>
</svg>
	);
}

export default Trash3;