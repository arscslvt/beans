import React from 'react';
import IconProps from "@/types/icon.types"

function House53(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M13.75,6.019c-.414,0-.75-.336-.75-.75V2.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2.519c0,.414-.336,.75-.75,.75Z" fill={secondaryfill}/>
		<path d="M15.792,5.848L9.446,1.147c-.265-.196-.628-.196-.893,0L2.208,5.848c-.444,.329-.708,.854-.708,1.406v6.496c0,1.517,1.233,2.75,2.75,2.75h.75v-5c0-.828,.672-1.5,1.5-1.5s1.5,.672,1.5,1.5v5h5.75c1.517,0,2.75-1.233,2.75-2.75V7.254c0-.552-.265-1.078-.708-1.406Zm-3.542,4.652h-1.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h1.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z" fill={fill}/>
	</g>
</svg>
	);
}

export default House53;