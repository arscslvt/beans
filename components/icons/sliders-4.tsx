import React from 'react';
import IconProps from "@/types/icon.types"

function Sliders4(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M16.25,4.5h-2.357c-.335-1.29-1.5-2.25-2.893-2.25s-2.558,.96-2.893,2.25H1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h6.357c.335,1.29,1.5,2.25,2.893,2.25s2.558-.96,2.893-2.25h2.357c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Zm-5.25,2.25c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5,.673,1.5,1.5-.673,1.5-1.5,1.5Z" fill={secondaryfill}/>
		<path d="M16.25,12h-6.357c-.335-1.29-1.5-2.25-2.893-2.25s-2.558,.96-2.893,2.25H1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h2.357c.335,1.29,1.5,2.25,2.893,2.25s2.558-.96,2.893-2.25h6.357c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Sliders4;