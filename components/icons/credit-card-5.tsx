import React from 'react';
import IconProps from "@/types/icon.types"

function CreditCard5(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m12,4v-.25c0-1.517-1.233-2.75-2.75-2.75H2.75C1.233,1,0,2.233,0,3.75v.25h12Z" fill={secondaryfill} strokeWidth="0"/>
		<path d="m0,5.5v2.75c0,1.517,1.233,2.75,2.75,2.75h6.5c1.517,0,2.75-1.233,2.75-2.75v-2.75H0Zm9.25,3.5h-2c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h2c.414,0,.75.336.75.75s-.336.75-.75.75Z" fill={fill} strokeWidth="0"/>
	</g>
</svg>
	);
}

export default CreditCard5;