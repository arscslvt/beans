import React from 'react';
import IconProps from "@/types/icon.types"

function Roadmap2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M10.25,11.25H4.044c-.339,0-.655-.172-.84-.457L.75,7,3.204,3.207c.184-.285,.5-.457,.84-.457h6.206c1.105,0,2,.895,2,2v4.5c0,1.105-.895,2-2,2Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.895,14c.297,.733,1.015,1.25,1.855,1.25h6.206c.339,0,.655-.172,.84-.457l2.454-3.793-2.483-3.837" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Roadmap2;