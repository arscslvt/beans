import React from 'react';
import IconProps from "@/types/icon.types"

function Scribble2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M1.75,9.881S5.824,5.674,8.142,3.85c1.55-1.219,2.463-1.339,3.025-.778,1.025,1.021-.407,2.918-2.358,5.512s-3.363,4.082-2.294,5.091c1.055,.996,3.237-1.232,4.05-2.14s2.669-2.922,3.578-2.075c.805,.75-.39,2.562-.813,3.372s-.943,1.646-.325,2.205c.874,.791,2.245-.876,2.245-.876" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Scribble2;