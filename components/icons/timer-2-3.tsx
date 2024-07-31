import React from 'react';
import IconProps from "@/types/icon.types"

function Timer23(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9,1c-.414,0-.75,.336-.75,.75v2.5c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.707c3.232,.373,5.75,3.126,5.75,6.457,0,3.584-2.916,6.5-6.5,6.5s-6.5-2.916-6.5-6.5c0-1.736,.676-3.369,1.904-4.596,.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0c-1.511,1.511-2.343,3.52-2.343,5.657,0,4.411,3.589,8,8,8s8-3.589,8-8S13.411,1,9,1Z" fill={fill}/>
		<path d="M8.47,9.53c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-3.25-3.25c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l3.25,3.25Z" fill={secondaryfill}/>
	</g>
</svg>
	);
}

export default Timer23;