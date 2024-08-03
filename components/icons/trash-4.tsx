import React from 'react';
import IconProps from "@/types/icon.types"

function Trash4(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m3.651,4.75c0,.014-.007.026-.006.04l.506,9.604c.077,1.461,1.283,2.606,2.746,2.606h4.205c1.463,0,2.669-1.145,2.746-2.605l.506-9.605c0-.014-.006-.026-.006-.04H3.651Z" fill={fill} strokeWidth="0"/>
		<path d="m15.25,4h-3.25v-1.25c0-.965-.785-1.75-1.75-1.75h-2.5c-.965,0-1.75.785-1.75,1.75v1.25h-3.25c-.414,0-.75.336-.75.75s.336.75.75.75h12.5c.414,0,.75-.336.75-.75s-.336-.75-.75-.75Zm-7.75-1.25c0-.138.112-.25.25-.25h2.5c.138,0,.25.112.25.25v1.25h-3v-1.25Z" fill={secondaryfill} strokeWidth="0"/>
	</g>
</svg>
	);
}

export default Trash4;