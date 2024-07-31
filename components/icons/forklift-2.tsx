import React from 'react';
import IconProps from "@/types/icon.types"

function Forklift2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M11.25,13.5v-4.464c0-.19-.027-.378-.08-.56l-1.46-5.006c-.124-.427-.516-.72-.96-.72h-3c-.552,0-1,.448-1,1v5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M11.176,8.75H2.75c-1.105,0-2,.895-2,2v2.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M17.25,15.25h-2.5c-.552,0-1-.448-1-1V1.75" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="4.231" x2="7.75" y1="13.25" y2="13.25"/>
		<circle cx="2.5" cy="13.5" fill="none" r="1.75" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<circle cx="9.5" cy="13.5" fill="none" r="1.75" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Forklift2;