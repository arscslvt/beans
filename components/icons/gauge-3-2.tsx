import React from 'react';
import IconProps from "@/types/icon.types"

function Gauge32(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<circle cx="9" cy="10" fill={secondaryfill} r="1" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="9" x2="9" y1="2.75" y2="4.75"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="14.127" x2="12.712" y1="4.873" y2="6.288"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="16.25" x2="14.25" y1="10" y2="10"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="3.873" x2="8.293" y1="4.873" y2="9.293"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="1.75" x2="3.75" y1="10" y2="10"/>
		<path d="M6,3.398c.914-.416,1.93-.648,3-.648,4.004,0,7.25,3.246,7.25,7.25,0,2.002-.811,3.815-2.123,5.127h0s-1.414-1.414-1.414-1.414" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.288,13.712l-1.414,1.414h0c-1.312-1.312-2.124-3.124-2.124-5.127,0-1.07,.232-2.086,.648-3" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Gauge32;