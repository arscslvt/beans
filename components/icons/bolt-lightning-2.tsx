import React from 'react';
import IconProps from "@/types/icon.types"

function BoltLightning2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M7.25,16.25l2-7H4.466c-.348,0-.589-.346-.469-.672L6.38,2.078c.072-.197,.26-.328,.469-.328h4.17c.352,0,.593,.353,.466,.681l-1.485,3.819h3.75c.412,0,.647,.47,.4,.8l-6.9,9.2Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default BoltLightning2;