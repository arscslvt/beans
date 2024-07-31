import React from 'react';
import IconProps from "@/types/icon.types"

function ClipboardSlash2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M14.573,3.927c-.314-.694-1.012-1.177-1.823-1.177h-1" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.785,16.25h6.965c1.105,0,2-.895,2-2V7.285" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6.25,2.75h-1c-1.105,0-2,.895-2,2V14.25c0,.293,.063,.572,.177,.823" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<rect height="3" width="5.5" fill="none" rx="1" ry="1" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x="6.25" y="1.25"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="2.25" x2="16" y1="16.25" y2="2.5"/>
	</g>
</svg>
	);
}

export default ClipboardSlash2;