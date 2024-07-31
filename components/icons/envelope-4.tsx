import React from 'react';
import IconProps from "@/types/icon.types"

function Envelope4(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M8.88,8.827c.074,.042,.166,.042,.24,0l7.777-4.283c-.314-1.173-1.376-2.044-2.647-2.044H3.75c-1.267,0-2.326,.865-2.643,2.033l7.773,4.293Z" fill={secondaryfill}/>
		<path d="M9.845,10.14c-.264,.146-.554,.219-.844,.219s-.582-.073-.846-.22L1,6.188v6.562c0,1.517,1.233,2.75,2.75,2.75H14.25c1.517,0,2.75-1.233,2.75-2.75V6.2l-7.155,3.94Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Envelope4;