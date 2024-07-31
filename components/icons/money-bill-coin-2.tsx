import React from 'react';
import IconProps from "@/types/icon.types"

function MoneyBillCoin2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M8.033,8.751c-.616-.341-1.033-.997-1.033-1.751,0-1.105,.895-2,2-2,.345,0,.67,.087,.953,.241" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4.75,1.75c0,1.657-1.343,3-3,3" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M13.25,1.75c0,1.657,1.343,3,3,3" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4.75,12.25c0-1.657-1.343-3-3-3" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M7.25,12.25H3.75c-1.105,0-2-.895-2-2V3.75c0-1.105,.895-2,2-2H14.25c1.105,0,2,.895,2,2v1" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<rect height="3" width="6.5" fill="none" rx="1" ry="1" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x="9.75" y="10.25"/>
		<rect height="3" width="6.5" fill="none" rx="1" ry="1" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x="10.75" y="7.25"/>
		<rect height="3" width="6.5" fill="none" rx="1" ry="1" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x="10.75" y="13.25"/>
	</g>
</svg>
	);
}

export default MoneyBillCoin2;