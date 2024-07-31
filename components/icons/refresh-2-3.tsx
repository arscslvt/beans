import React from 'react';
import IconProps from "@/types/icon.types"

function Refresh23(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9.03,12.22c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l1.208,1.208c-.059,.002-.118,.012-.178,.012-3.032,0-5.5-2.467-5.5-5.5,0-1.616,.706-3.143,1.938-4.191,.315-.269,.354-.742,.085-1.057s-.74-.353-1.058-.085c-1.567,1.333-2.466,3.277-2.466,5.333,0,3.76,2.983,6.829,6.704,6.985l-.735,.735c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2.25-2.25c.293-.293,.293-.768,0-1.061l-2.25-2.25Z" fill={fill}/>
		<path d="M9.296,2.015l.735-.735c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0l-2.25,2.25c-.293,.293-.293,.768,0,1.061l2.25,2.25c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-1.208-1.208c.059-.002,.118-.012,.177-.012,3.032,0,5.5,2.467,5.5,5.5,0,1.616-.706,3.143-1.938,4.191-.315,.269-.354,.742-.085,1.057,.148,.174,.359,.264,.571,.264,.172,0,.345-.059,.486-.179,1.567-1.333,2.466-3.277,2.466-5.333,0-3.76-2.983-6.829-6.704-6.985Z" fill={secondaryfill}/>
	</g>
</svg>
	);
}

export default Refresh23;