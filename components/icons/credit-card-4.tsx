import React from 'react';
import IconProps from "@/types/icon.types"

function CreditCard4(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M17,5.75c0-1.517-1.233-2.75-2.75-2.75H3.75c-1.517,0-2.75,1.233-2.75,2.75v.75H17v-.75Z" fill={secondaryfill}/>
		<path d="M1,12.25c0,1.517,1.233,2.75,2.75,2.75H14.25c1.517,0,2.75-1.233,2.75-2.75v-4.25H1v4.25Zm11.75-1.75h1c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75h-1c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75Zm-8.5,0h3c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75h-3c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75Z" fill={fill}/>
	</g>
</svg>
	);
}

export default CreditCard4;