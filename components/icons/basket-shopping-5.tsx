import React from 'react';
import IconProps from "@/types/icon.types"

function BasketShopping5(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m3,5c-.084,0-.169-.014-.252-.043-.39-.14-.593-.569-.454-.959L3.543.498c.14-.391.569-.595.959-.454.39.14.593.569.454.959l-1.25,3.5c-.11.307-.398.498-.707.498Z" fill={secondaryfill} strokeWidth="0"/>
		<path d="m9,5c-.308,0-.597-.191-.707-.498l-1.25-3.5c-.139-.39.064-.819.454-.959.39-.139.819.063.959.454l1.25,3.5c.139.39-.064.819-.454.959-.083.029-.168.043-.252.043Z" fill={secondaryfill} strokeWidth="0"/>
		<path d="m11.25,3.5H.75c-.414,0-.75.336-.75.75s.336.75.75.75h.107l.641,4.168c.208,1.352,1.351,2.332,2.718,2.332h3.568c1.367,0,2.51-.98,2.718-2.332l.641-4.168h.107c.414,0,.75-.336.75-.75s-.336-.75-.75-.75Z" fill={fill} strokeWidth="0"/>
	</g>
</svg>
	);
}

export default BasketShopping5;