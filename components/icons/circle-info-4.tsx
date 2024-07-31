import React from 'react';
import IconProps from "@/types/icon.types"

function CircleInfo4(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9,1C4.589,1,1,4.589,1,9s3.589,8,8,8,8-3.589,8-8S13.411,1,9,1Zm.75,11.819c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-4.569c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v4.569Zm-.75-6.069c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z" fill={fill}/>
	</g>
</svg>
	);
}

export default CircleInfo4;