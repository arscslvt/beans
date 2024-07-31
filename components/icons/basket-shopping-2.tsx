import React from 'react';
import IconProps from "@/types/icon.types"

function BasketShopping2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="3" x2="4.25" y1="4.25" y2=".75"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="9" x2="7.75" y1="4.25" y2=".75"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="11.25" x2=".75" y1="4.25" y2="4.25"/>
		<path d="m10.5,4.25l-.739,4.804c-.15.976-.99,1.696-1.977,1.696h-3.568c-.987,0-1.827-.72-1.977-1.696l-.739-4.804" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default BasketShopping2;