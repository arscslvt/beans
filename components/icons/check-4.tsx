import React from 'react';
import IconProps from "@/types/icon.types"

function Check4(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M6.75,15h-.002c-.227,0-.442-.104-.583-.281L2.165,9.719c-.259-.324-.207-.795,.117-1.054,.325-.259,.796-.206,1.054,.117l3.418,4.272L14.667,3.278c.261-.322,.732-.373,1.055-.111,.322,.261,.372,.733,.111,1.055L7.333,14.722c-.143,.176-.357,.278-.583,.278Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Check4;