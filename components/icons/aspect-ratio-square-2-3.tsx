import React from 'react';
import IconProps from "@/types/icon.types"

function AspectRatioSquare23(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M13.25,2H4.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75H13.25c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75Zm-5,11.5h-3c-.414,0-.75-.336-.75-.75v-3c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2.25h2.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm5.25-5.25c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-2.25h-2.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h3c.414,0,.75,.336,.75,.75v3Z" fill={fill}/>
	</g>
</svg>
	);
}

export default AspectRatioSquare23;