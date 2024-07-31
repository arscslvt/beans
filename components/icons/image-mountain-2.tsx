import React from 'react';
import IconProps from "@/types/icon.types"

function ImageMountain2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M16.329,12.658l-4.273-5.812c-.4-.543-1.212-.543-1.611,0l-3.319,4.514-1.444-1.964c-.4-.544-1.212-.544-1.611,0l-2.398,3.262c-.486,.66-.014,1.592,.806,1.592H15.523c.82,0,1.291-.932,.806-1.592Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<circle cx="5.5" cy="4" fill="none" r="1.75" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default ImageMountain2;