import React from 'react';
import IconProps from "@/types/icon.types"

function Magnifier4(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M15.25,16c-.192,0-.384-.073-.53-.22l-3.965-3.965c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l3.965,3.965c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z" fill={secondaryfill}/>
		<path d="M7.75,13.5c-3.17,0-5.75-2.58-5.75-5.75S4.58,2,7.75,2s5.75,2.58,5.75,5.75-2.58,5.75-5.75,5.75Zm0-10c-2.343,0-4.25,1.907-4.25,4.25s1.907,4.25,4.25,4.25,4.25-1.907,4.25-4.25-1.907-4.25-4.25-4.25Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Magnifier4;