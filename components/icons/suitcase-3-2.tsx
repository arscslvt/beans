import React from 'react';
import IconProps from "@/types/icon.types"

function Suitcase32(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m.75,6.75c3.547,1.337,7.047,1.337,10.5,0" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="m3.75,3.75V1.75c0-.552.448-1,1-1h2.5c.552,0,1,.448,1,1v2" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="6" x2="6" y1="8.75" y2="6.75"/>
		<rect height="7" width="10.5" fill="none" rx="2" ry="2" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x=".75" y="3.75"/>
	</g>
</svg>
	);
}

export default Suitcase32;