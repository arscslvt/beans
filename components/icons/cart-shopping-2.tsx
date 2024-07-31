import React from 'react';
import IconProps from "@/types/icon.types"

function CartShopping2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<circle cx="9.5" cy="11" fill={secondaryfill} r="1" strokeWidth="0"/>
		<circle cx="3" cy="11" fill={secondaryfill} r="1" strokeWidth="0"/>
		<path d="m2.255,3.25h8.135c.316,0,.552.289.49.598l-.639,3.196c-.14.701-.756,1.206-1.471,1.206h-4.477c-.743,0-1.374-.544-1.484-1.279l-.727-4.88c-.051-.342-.275-.633-.591-.77l-.74-.321" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default CartShopping2;