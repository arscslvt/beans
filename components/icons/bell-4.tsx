import React from 'react';
import IconProps from "@/types/icon.types"

function Bell4(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M15.75,12.5c-.689,0-1.25-.561-1.25-1.25V6.5c0-3.033-2.467-5.5-5.5-5.5S3.5,3.467,3.5,6.5v4.75c0,.689-.561,1.25-1.25,1.25-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H15.75c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z" fill={fill}/>
		<path d="M10.2,15h-2.399c-.151,0-.293,.068-.388,.185-.095,.117-.132,.271-.101,.418,.173,.822,.868,1.397,1.689,1.397s1.516-.575,1.689-1.397c.031-.147-.006-.301-.101-.418-.095-.117-.237-.185-.388-.185Z" fill={secondaryfill}/>
	</g>
</svg>
	);
}

export default Bell4;