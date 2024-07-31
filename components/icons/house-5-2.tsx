import React from 'react';
import IconProps from "@/types/icon.types"

function House52(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M5.75,15.75v-4.75c0-.69,.56-1.25,1.25-1.25h0c.69,0,1.25,.56,1.25,1.25v4.75" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M2.655,6.45L9,1.75l6.345,4.7c.255,.189,.405,.487,.405,.804v6.496c0,1.105-.895,2-2,2H4.25c-1.105,0-2-.895-2-2V7.254c0-.317,.15-.615,.405-.804Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="10.75" x2="12.25" y1="9.75" y2="9.75"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="13.75" x2="13.75" y1="2.75" y2="5.269"/>
	</g>
</svg>
	);
}

export default House52;