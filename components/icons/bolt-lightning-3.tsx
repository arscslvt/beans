import React from 'react';
import IconProps from "@/types/icon.types"

function BoltLightning3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M14.868,6.191c-.213-.426-.642-.691-1.118-.691h-2.653l1.088-2.798c.149-.385,.099-.818-.134-1.159-.233-.34-.619-.543-1.031-.543H6.85c-.522,0-.994,.329-1.174,.819l-2.385,6.501c-.14,.383-.083,.812,.15,1.146,.234,.334,.617,.533,1.024,.533h3.79l-1.727,6.044c-.1,.348,.063,.717,.387,.878,.107,.053,.221,.078,.334,.078,.229,0,.454-.106,.6-.3L14.751,7.5c.285-.381,.33-.882,.117-1.309Z" fill={fill}/>
	</g>
</svg>
	);
}

export default BoltLightning3;