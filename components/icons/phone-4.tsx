import React from 'react';
import IconProps from "@/types/icon.types"

function Phone4(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M15.729,10.982l-2.926-1.299c-.713-.317-1.551-.114-2.04,.494l-1.367,1.701c-1.307-.854-2.423-1.971-3.277-3.28l1.705-1.358c.609-.488,.813-1.327,.497-2.04l-1.3-2.928c-.343-.772-1.185-1.178-2.004-.967l-2.476,.643c-.846,.22-1.393,1.04-1.273,1.907,.934,6.649,6.229,11.945,12.88,12.879,.08,.011,.158,.016,.236,.016,.774,0,1.468-.522,1.669-1.29l.642-2.476c.211-.817-.195-1.659-.966-2.002Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Phone4;