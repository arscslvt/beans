import React from 'react';
import IconProps from "@/types/icon.types"

function AtSign4(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M8.875,12.75c-1.999,0-3.625-1.738-3.625-3.875s1.626-3.875,3.625-3.875,3.625,1.738,3.625,3.875-1.626,3.875-3.625,3.875Zm0-6.25c-1.172,0-2.125,1.065-2.125,2.375s.953,2.375,2.125,2.375,2.125-1.065,2.125-2.375-.953-2.375-2.125-2.375Z" fill={secondaryfill}/>
		<path d="M9.361,16.999c-2.983,0-5.836-1.655-7.229-4.423C.312,8.96,1.448,4.551,4.773,2.319,8.505-.188,13.374,1.161,15.409,3.937c1.5,2.043,1.74,5.095,.56,7.098-.966,1.642-2.467,2.086-3.521,1.798-.879-.239-1.447-.985-1.447-1.899V5.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v5.184c0,.154,.035,.369,.341,.452,.409,.114,1.235-.093,1.835-1.112,.88-1.493,.67-3.886-.477-5.45-1.629-2.223-5.648-3.233-8.59-1.259-2.654,1.782-3.593,5.444-2.137,8.336,1.46,2.901,4.891,4.298,7.983,3.253,.394-.131,.817,.078,.951,.47,.133,.392-.078,.818-.47,.951-.848,.287-1.716,.424-2.575,.424Z" fill={fill}/>
	</g>
</svg>
	);
}

export default AtSign4;