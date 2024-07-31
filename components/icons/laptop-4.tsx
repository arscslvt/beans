import React from 'react';
import IconProps from "@/types/icon.types"

function Laptop4(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M13.75,15.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75c.689,0,1.25-.561,1.25-1.25V4.75c0-.689-.561-1.25-1.25-1.25H4.25c-.689,0-1.25,.561-1.25,1.25V12.75c0,.689,.561,1.25,1.25,1.25,.414,0,.75,.336,.75,.75s-.336,.75-.75,.75c-1.517,0-2.75-1.233-2.75-2.75V4.75c0-1.517,1.233-2.75,2.75-2.75H13.75c1.517,0,2.75,1.233,2.75,2.75V12.75c0,1.517-1.233,2.75-2.75,2.75Z" fill={secondaryfill}/>
		<path d="M17.25,15.5H.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H17.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Laptop4;