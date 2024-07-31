import React from 'react';
import IconProps from "@/types/icon.types"

function TriangleWarning4(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M16.437,12.516L11.012,3.12c-.42-.727-1.172-1.161-2.012-1.161s-1.592,.434-2.012,1.161L1.563,12.516c-.42,.727-.42,1.595,0,2.322,.42,.728,1.172,1.162,2.012,1.162H14.425c.84,0,1.592-.434,2.012-1.162,.42-.727,.42-1.595,0-2.322ZM8.25,6.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v3.5c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-3.5Zm.75,7.069c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z" fill={fill}/>
	</g>
</svg>
	);
}

export default TriangleWarning4;