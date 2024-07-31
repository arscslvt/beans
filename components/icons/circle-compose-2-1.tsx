import React from 'react';
import IconProps from "@/types/icon.types"

function CircleCompose21(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M6.75 11.25C6.75 11.25 8.87 11.13 9.586 10.414L15.836 4.164C16.388 3.612 16.388 2.716 15.836 2.164C15.284 1.612 14.388 1.612 13.836 2.164L7.586 8.414C6.87 9.13 6.75 11.25 6.75 11.25Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M16.182 8C16.227 8.327 16.25 8.661 16.25 9C16.25 13.004 13.004 16.25 9 16.25C4.996 16.25 1.75 13.004 1.75 9C1.75 4.996 4.996 1.75 9 1.75C9.339 1.75 9.673 1.773 10 1.818" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6.75 11.25C6.75 11.25 8.87 11.13 9.586 10.414L15.836 4.164C16.388 3.612 16.388 2.716 15.836 2.164C15.284 1.612 14.388 1.612 13.836 2.164L7.586 8.414C6.87 9.13 6.75 11.25 6.75 11.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default CircleCompose21;