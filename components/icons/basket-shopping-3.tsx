import React from 'react';
import IconProps from "@/types/icon.types"

function BasketShopping3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="4.75" x2="7.25" y1="6.25" y2="1.75"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="13.25" x2="10.75" y1="6.25" y2="1.75"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="1.75" x2="16.25" y1="6.25" y2="6.25"/>
		<path d="M15,6.25l-.597,7.166c-.086,1.037-.953,1.834-1.993,1.834H5.59c-1.04,0-1.907-.797-1.993-1.834l-.597-7.166" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default BasketShopping3;