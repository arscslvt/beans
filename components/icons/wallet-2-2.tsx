import React from 'react';
import IconProps from "@/types/icon.types"

function Wallet22(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M2.25,5.5h0c0-1.733,1.249-3.213,2.957-3.505L11.769,.875c.434-.074,.866,.145,1.063,.539l.053,.106" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15.75,11.25v2c0,1.105-.895,2-2,2H4.25c-1.105,0-2-.895-2-2V5.75c0-1.105,.895-2,2-2H13.75c1.105,0,2,.895,2,2v2" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15.75,11.25h-2.75c-.966,0-1.75-.784-1.75-1.75h0c0-.967,.784-1.75,1.75-1.75h2.75c.552,0,1,.448,1,1v1.5c0,.552-.448,1-1,1Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Wallet22;