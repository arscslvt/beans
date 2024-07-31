import React from 'react';
import IconProps from "@/types/icon.types"

function EyeClosed2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M1.859,7.27c1.815,1.851,4.344,3,7.141,3s5.326-1.148,7.141-3" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="4.021" x2="2.75" y1="8.942" y2="11.019"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="7.3" x2="6.823" y1="10.126" y2="12.5"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="13.979" x2="15.25" y1="8.942" y2="11.019"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="10.7" x2="11.177" y1="10.126" y2="12.5"/>
	</g>
</svg>
	);
}

export default EyeClosed2;