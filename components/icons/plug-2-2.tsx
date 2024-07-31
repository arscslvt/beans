import React from 'react';
import IconProps from "@/types/icon.types"

function Plug22(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M5.104,8.714l4.182,4.182c.391,.391,.391,1.024,0,1.414l-.28,.28c-1.545,1.545-4.051,1.545-5.596,0h0c-1.545-1.545-1.545-4.051,0-5.596l.28-.28c.391-.391,1.024-.391,1.414,0Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M8.714,5.104l4.182,4.182c.391,.391,1.024,.391,1.414,0l.28-.28c1.545-1.545,1.545-4.051,0-5.596h0c-1.545-1.545-4.051-1.545-5.596,0l-.28,.28c-.391,.391-.391,1.024,0,1.414Z" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="1.75" x2="3.409" y1="16.25" y2="14.591"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="5.945" x2="7.5" y1="9.555" y2="8"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="8.445" x2="10" y1="12.055" y2="10.5"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="16.25" x2="14.591" y1="1.75" y2="3.409"/>
	</g>
</svg>
	);
}

export default Plug22;