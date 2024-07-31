import React from 'react';
import IconProps from "@/types/icon.types"

function ImageDepth2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M7.75,2c-.689,0-1.25,.561-1.25,1.25s.561,1.25,1.25,1.25,1.25-.561,1.25-1.25-.561-1.25-1.25-1.25Z" fill={secondaryfill}/>
		<path d="M10.194,6.846l-4.273,5.812c-.486,.66-.014,1.592,.806,1.592H15.273c.82,0,1.291-.932,.806-1.592l-4.273-5.812c-.4-.543-1.212-.543-1.611,0Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M7.731,10.195l-2.128-2.879c-.3-.406-.906-.406-1.206,0l-2.763,3.738c-.366,.495-.012,1.196,.603,1.196h3.984" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default ImageDepth2;