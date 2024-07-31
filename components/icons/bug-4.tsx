import React from 'react';
import IconProps from "@/types/icon.types"

function Bug4(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="6" x2="6" y1="8.5" y2="11.25"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="2.75" x2=".75" y1="6.75" y2="6.75"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="9.25" x2="11.25" y1="6.75" y2="6.75"/>
		<path d="m2.75,4.25h0c-1.105,0-2-.895-2-2" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="m2.75,9.25h0c-1.105,0-2,.895-2,2" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="m9.25,4.25h0c1.105,0,2-.895,2-2" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="m9.25,9.25h0c1.105,0,2,.895,2,2" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="m7.929,3.25c.042-.161.071-.326.071-.5,0-1.105-.895-2-2-2s-2,.895-2,2c0,.174.029.339.071.5" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="m3.75,3.25h4.5c.552,0,1,.448,1,1v3.75c0,1.794-1.456,3.25-3.25,3.25h0c-1.794,0-3.25-1.456-3.25-3.25v-3.75c0-.552.448-1,1-1Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Bug4;