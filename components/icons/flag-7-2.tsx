import React from 'react';
import IconProps from "@/types/icon.types"

function Flag72(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M3.75,3.25h7.5c.552,0,1,.448,1,1v5H3.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M12.25,5.75h2c.552,0,1,.448,1,1v4c0,.552-.448,1-1,1h-3.5c-.552,0-1-.448-1-1v-1.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="10.043" x2="12.25" y1="11.457" y2="9.25"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="3.75" x2="3.75" y1="1.75" y2="16.25"/>
	</g>
</svg>
	);
}

export default Flag72;