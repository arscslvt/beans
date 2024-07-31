import React from 'react';
import IconProps from "@/types/icon.types"

function CartShopping5(props: IconProps) {
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
		<path d="m8.771,9h-4.478c-1.106,0-2.062-.825-2.225-1.918l-.553-3.711c0-.006-.002-.012-.003-.018l-.171-1.151c-.013-.084-.069-.158-.148-.192l-.741-.321C.072,1.523-.103,1.082.062.702.227.322.667.146,1.048.312l.74.321c.558.241.945.745,1.035,1.347l.078.521h7.489c.376,0,.729.167.967.458.238.291.333.669.259,1.038l-.639,3.195c-.209,1.048-1.137,1.809-2.206,1.809Zm1.62-5h.01-.01Z" fill={fill} strokeWidth="0"/>
	</g>
</svg>
	);
}

export default CartShopping5;