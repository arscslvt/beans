import React from 'react';
import IconProps from "@/types/icon.types"

function Lightbulb32(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="9" x2="9" y1=".75" y2="1.75"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="14.834" x2="14.127" y1="3.166" y2="3.873"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="17.25" x2="16.25" y1="9" y2="9"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="3.166" x2="3.873" y1="3.166" y2="3.873"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1=".75" x2="1.75" y1="9" y2="9"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="6.897" x2="11.103" y1="13.25" y2="13.25"/>
		<path d="M13.75,9c0-2.959-2.705-5.286-5.777-4.642-1.872,.392-3.35,1.957-3.658,3.844-.381,2.339,.951,4.417,2.935,5.205v2.343c0,.552,.448,1,1,1h1.5c.552,0,1-.448,1-1v-2.343c1.755-.697,3-2.403,3-4.407Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Lightbulb32;