import React from 'react';
import IconProps from "@/types/icon.types"

function GasPump2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M3.25,15.75V4.25c0-1.105,.895-2,2-2h4.5c1.105,0,2,.895,2,2V15.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M14.75,4.25l2.207,2.207c.188,.188,.293,.442,.293,.707v4.586c0,.828-.672,1.5-1.5,1.5h0c-.828,0-1.5-.672-1.5-1.5v-1" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M16,5.5v1.75c0,.552,.448,1,1,1h.25" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="1.75" x2="13.25" y1="15.75" y2="15.75"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="3.25" x2="11.75" y1="8.75" y2="8.75"/>
	</g>
</svg>
	);
}

export default GasPump2;