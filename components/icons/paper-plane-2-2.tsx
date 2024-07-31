import React from 'react';
import IconProps from "@/types/icon.types"

function PaperPlane22(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="10.961" x2="4.82" y1="1.039" y2="7.18"/>
		<path d="m11.21,1.8l-2.859,8.893c-.213.661-1.108.759-1.457.159l-2.01-3.447c-.07-.12-.169-.219-.289-.289l-3.447-2.01c-.6-.35-.502-1.245.159-1.457L10.2.79c.622-.2,1.21.388,1.01,1.01Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default PaperPlane22;