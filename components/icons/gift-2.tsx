import React from 'react';
import IconProps from "@/types/icon.types"

function Gift2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="6" x2="6" y1="3.75" y2="10.75"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="11.25" x2=".75" y1="3.75" y2="3.75"/>
		<path d="m1.75,2.25c0-.828.635-1.5,1.417-1.5,2.096,0,2.833,3,2.833,3h-2.833c-.782,0-1.417-.672-1.417-1.5Z" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="m8.833,3.75h-2.833s.737-3,2.833-3c.782,0,1.417.672,1.417,1.5,0,.828-.635,1.5-1.417,1.5Z" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="m10.25,3.75v5c0,1.105-.895,2-2,2H3.75c-1.105,0-2-.895-2-2V3.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Gift2;