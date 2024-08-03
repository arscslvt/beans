import React from 'react';
import IconProps from "@/types/icon.types"

function CartShopping3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M1.75,1.75l1.351,.338c.393,.098,.688,.424,.747,.825l1.153,7.838" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15.25,13.25H4.5c-.69,0-1.25-.56-1.25-1.25h0c0-.69,.56-1.25,1.25-1.25H13.029c.43,0,.813-.275,.949-.684l1.333-4c.216-.648-.266-1.316-.949-1.316H4.118" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<circle cx="3.75" cy="15.75" fill={secondaryfill} r="1.25"/>
		<circle cx="14.25" cy="15.75" fill={secondaryfill} r="1.25"/>
	</g>
</svg>
	);
}

export default CartShopping3;