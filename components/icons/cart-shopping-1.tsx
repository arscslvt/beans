import React from 'react';
import IconProps from "@/types/icon.types"

function CartShopping1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M4.12862 4.75L14.3791 4.75C15.0641 4.75 15.5463 5.4231 15.326 6.07166L13.9667 10.0727C13.829 10.4782 13.4482 10.751 13.0199 10.751H5.00095L4.12862 4.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M1.75 1.75L3.101 2.088C3.494 2.186 3.789 2.512 3.848 2.913L5.001 10.751" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15.25 13.25H4.5C3.81 13.25 3.25 12.69 3.25 12C3.25 11.31 3.81 10.75 4.5 10.75H13.029C13.459 10.75 13.842 10.475 13.978 10.066L15.311 6.066C15.527 5.418 15.045 4.75 14.362 4.75H4.118" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M3.75 17C4.44036 17 5 16.4404 5 15.75C5 15.0596 4.44036 14.5 3.75 14.5C3.05964 14.5 2.5 15.0596 2.5 15.75C2.5 16.4404 3.05964 17 3.75 17Z" fill={fill}/>
		<path d="M14.25 17C14.9404 17 15.5 16.4404 15.5 15.75C15.5 15.0596 14.9404 14.5 14.25 14.5C13.5596 14.5 13 15.0596 13 15.75C13 16.4404 13.5596 17 14.25 17Z" fill={fill}/>
	</g>
</svg>
	);
}

export default CartShopping1;