import React from 'react';
import IconProps from "@/types/icon.types"

function Office2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M11.25,6.25h4c.552,0,1,.448,1,1V15.25c0,.552-.448,1-1,1h-5V7.25c0-.552,.448-1,1-1Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M2.75,8.75H6.75c.552,0,1,.448,1,1v6.5H2.75c-.552,0-1-.448-1-1v-5.5c0-.552,.448-1,1-1Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.25,6.25v-1.802c0-.42,.262-.794,.656-.939L11.406,1.493c.653-.239,1.344,.244,1.344,.939v1.318" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="12.75" x2="13.75" y1="8.75" y2="8.75"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="12.75" x2="13.75" y1="11.25" y2="11.25"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="12.75" x2="13.75" y1="13.75" y2="13.75"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="4.25" x2="5.25" y1="11.25" y2="11.25"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="4.25" x2="5.25" y1="13.75" y2="13.75"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="7.75" x2="10.25" y1="16.25" y2="16.25"/>
	</g>
</svg>
	);
}

export default Office2;