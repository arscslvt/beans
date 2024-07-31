import React from 'react';
import IconProps from "@/types/icon.types"

function MicrophoneSlash2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<rect height="9.5" width="6.5" fill="none" rx="3.25" ry="3.25" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x="5.75" y="1.75"/>
		<path d="M5.109,12.891c-1.437-1.145-2.359-2.911-2.359-4.891" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15.25,8c0,3.452-2.798,6.25-6.25,6.25h0c-.527,0-1.038-.065-1.527-.188" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="9" x2="9" y1="14.25" y2="16.25"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="2" x2="16" y1="16" y2="2"/>
	</g>
</svg>
	);
}

export default MicrophoneSlash2;