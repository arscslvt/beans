import React from 'react';
import IconProps from "@/types/icon.types"

function Microphone4(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9,12c2.206,0,4-1.794,4-4v-3c0-2.206-1.794-4-4-4s-4,1.794-4,4v3c0,2.206,1.794,4,4,4Z" fill={fill}/>
		<path d="M15.25,7.25c-.414,0-.75,.336-.75,.75,0,3.033-2.467,5.5-5.5,5.5s-5.5-2.467-5.5-5.5c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75c0,3.606,2.742,6.583,6.25,6.958v1.292c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.292c3.508-.376,6.25-3.352,6.25-6.958,0-.414-.336-.75-.75-.75Z" fill={secondaryfill}/>
	</g>
</svg>
	);
}

export default Microphone4;