import React from 'react';
import IconProps from "@/types/icon.types"

function Tag3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M3.25,2.25h4.922c.53,0,1.039,.211,1.414,.586l5.75,5.75c.781,.781,.781,2.047,0,2.828l-3.922,3.922c-.781,.781-2.047,.781-2.828,0L2.836,9.586c-.375-.375-.586-.884-.586-1.414V3.25c0-.552,.448-1,1-1Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<circle cx="6.25" cy="6.25" fill={secondaryfill} r="1.25"/>
	</g>
</svg>
	);
}

export default Tag3;