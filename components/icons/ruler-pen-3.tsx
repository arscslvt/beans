import React from 'react';
import IconProps from "@/types/icon.types"

function RulerPen3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M10.063,4.906L6.732,1.575c-.681-.682-1.792-.681-2.475,0L1.575,4.258c-.682,.682-.682,1.792,0,2.474l3.331,3.331c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-1.49-1.49,1.237-1.238c.293-.293,.293-.768,0-1.061-.293-.293-.768-.293-1.061,0l-1.237,1.238-.781-.781c-.097-.098-.097-.256,0-.354l2.682-2.682c.099-.098,.256-.097,.354,0l3.331,3.331c.293,.293,.768,.293,1.061,0s.293-.768,0-1.061Z" fill={secondaryfill}/>
		<path d="M16.425,11.268l-1.581-1.581c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l1.581,1.581c.097,.098,.097,.256,0,.354l-2.682,2.682c-.099,.098-.256,.097-.354,0l-.781-.781,1.238-1.237c.293-.292,.293-.768,0-1.061s-.768-.293-1.061,0l-1.238,1.237-1.49-1.49c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l3.331,3.331c.341,.341,.789,.512,1.237,.512s.896-.171,1.238-.512l2.683-2.683c.682-.682,.682-1.792,0-2.474Z" fill={secondaryfill}/>
		<path d="M15.903,2.097c-1.128-1.128-2.964-1.127-4.091,0L3.235,10.674c-1.065,1.066-1.625,4.318-1.726,4.959-.038,.237,.041,.478,.21,.647,.142,.142,.333,.22,.53,.22,.039,0,.078-.003,.117-.009,.641-.101,3.893-.66,4.959-1.726L15.903,6.188c1.127-1.128,1.127-2.963,0-4.091Zm-1.061,3.031l-.69,.69-1.97-1.97,.69-.69c.271-.271,.628-.407,.985-.407s.713,.136,.985,.407c.542,.543,.542,1.427,0,1.97Z" fill={fill}/>
	</g>
</svg>
	);
}

export default RulerPen3;