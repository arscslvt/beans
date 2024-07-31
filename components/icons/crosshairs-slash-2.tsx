import React from 'react';
import IconProps from "@/types/icon.types"

function CrosshairsSlash2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M15.012,6.524c.315,.763,.488,1.6,.488,2.476,0,3.59-2.91,6.5-6.5,6.5-.877,0-1.713-.174-2.476-.488" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4.404,13.596c-1.176-1.176-1.904-2.801-1.904-4.596,0-3.59,2.91-6.5,6.5-6.5,1.795,0,3.42,.728,4.596,1.904" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M7.409,10.591c-.407-.407-.659-.97-.659-1.591,0-1.243,1.007-2.25,2.25-2.25,.621,0,1.184,.252,1.591,.659" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="9" x2="9" y1="1" y2="2.5"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="17" x2="15.5" y1="9" y2="9"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="9" x2="9" y1="17" y2="15.5"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="1" x2="2.5" y1="9" y2="9"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="2" x2="16" y1="16" y2="2"/>
	</g>
</svg>
	);
}

export default CrosshairsSlash2;