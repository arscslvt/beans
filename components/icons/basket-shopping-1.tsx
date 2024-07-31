import React from 'react';
import IconProps from "@/types/icon.types"

function BasketShopping1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M15 6.25L14.403 13.416C14.317 14.453 13.45 15.25 12.41 15.25H5.59C4.55 15.25 3.683 14.453 3.597 13.416L3 6.25" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M4.75 6.25L7.25 1.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M13.25 6.25L10.75 1.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15 6.25L14.403 13.416C14.317 14.453 13.45 15.25 12.41 15.25H5.59C4.55 15.25 3.683 14.453 3.597 13.416L3 6.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M1.75 6.25H16.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default BasketShopping1;