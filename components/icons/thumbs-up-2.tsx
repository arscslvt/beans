import React from 'react';
import IconProps from "@/types/icon.types"

function ThumbsUp2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m7,4.75l.638-2.031c.225-.716-.114-1.488-.794-1.807l-.345-.162-2.802,3.449c-.29.357-.448.802-.448,1.261v3.79c0,1.105.895,2,2,2h3.229c.878,0,1.653-.573,1.912-1.412l.769-2.5c.396-1.286-.566-2.588-1.912-2.588h-2.249Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1=".75" x2=".75" y1="10.75" y2="5.25"/>
	</g>
</svg>
	);
}

export default ThumbsUp2;