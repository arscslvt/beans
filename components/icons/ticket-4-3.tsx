import React from 'react';
import IconProps from "@/types/icon.types"

function Ticket43(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M14.25,3h-5.75c-.414,0-.75,.336-.75,.75,0,.551-.449,1-1,1s-1-.449-1-1c0-.414-.336-.75-.75-.75h-1.25c-1.517,0-2.75,1.233-2.75,2.75v6.5c0,1.517,1.233,2.75,2.75,2.75h1.25c.414,0,.75-.336,.75-.75,0-.551,.449-1,1-1s1,.449,1,1c0,.414,.336,.75,.75,.75h5.75c1.517,0,2.75-1.233,2.75-2.75V5.75c0-1.517-1.233-2.75-2.75-2.75ZM6.75,11.188c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75,.75,.336,.75,.75-.336,.75-.75,.75Zm0-2.875c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75,.75,.336,.75,.75-.336,.75-.75,.75Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Ticket43;