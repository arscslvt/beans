import React from 'react';
import IconProps from "@/types/icon.types"

function OrderedList1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M2.50002 11.661C2.75902 10.74 3.65202 10.236 4.61602 10.25C5.58102 10.264 6.48802 10.696 6.54502 11.661C6.60202 12.626 5.58002 13.273 4.52202 13.705C3.46402 14.137 2.58602 14.54 2.49902 15.749H6.54802" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9.5 5.25H16.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9.5 12.75H16.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4.75002 7.5V2C4.75002 2 4.12002 3.108 2.78302 3.364" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default OrderedList1;