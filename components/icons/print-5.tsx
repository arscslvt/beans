import React from 'react';
import IconProps from "@/types/icon.types"

function Print5(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m8.75,4c-.414,0-.75-.336-.75-.75v-1.5c0-.138-.112-.25-.25-.25h-3.5c-.138,0-.25.112-.25.25v1.5c0,.414-.336.75-.75.75s-.75-.336-.75-.75v-1.5c0-.965.785-1.75,1.75-1.75h3.5c.965,0,1.75.785,1.75,1.75v1.5c0,.414-.336.75-.75.75Z" fill={secondaryfill} strokeWidth="0"/>
		<path d="m9.75,3H2.25c-1.24,0-2.25,1.009-2.25,2.25v2c0,1.241,1.01,2.25,2.25,2.25h.25v.75c0,.965.785,1.75,1.75,1.75h3.5c.965,0,1.75-.785,1.75-1.75v-.75h.25c1.24,0,2.25-1.009,2.25-2.25v-2c0-1.241-1.01-2.25-2.25-2.25Zm-1.75,7.25c0,.138-.112.25-.25.25h-3.5c-.138,0-.25-.112-.25-.25v-3.25h4v3.25Z" fill={fill} strokeWidth="0"/>
	</g>
</svg>
	);
}

export default Print5;