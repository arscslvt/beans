import React from 'react';
import IconProps from "@/types/icon.types"

function DarkLight3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9,12V6c-1.657,0-3,1.343-3,3s1.343,3,3,3Z" fill={secondaryfill}/>
		<path d="M9,6c1.657,0,3,1.343,3,3s-1.343,3-3,3v4.25c4.004,0,7.25-3.246,7.25-7.25S13.004,1.75,9,1.75V6Z" fill={secondaryfill}/>
		<path d="M9,1c4.411,0,8,3.589,8,8s-3.589,8-8,8S1,13.411,1,9,4.589,1,9,1Zm0,14.5c3.584,0,6.5-2.916,6.5-6.5s-2.916-6.5-6.5-6.5S2.5,5.416,2.5,9s2.916,6.5,6.5,6.5Z" fill={fill}/>
	</g>
</svg>
	);
}

export default DarkLight3;