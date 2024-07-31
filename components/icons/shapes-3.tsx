import React from 'react';
import IconProps from "@/types/icon.types"

function Shapes3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<circle cx="13.5" cy="6" fill={secondaryfill} r="4"/>
		<rect height="7" width="7" fill={fill} rx="1.75" ry="1.75" x="4" y="10"/>
		<path d="M7.963,7.373c.222-.387,.221-.867-.004-1.252L5.33,1.611c-.454-.775-1.705-.775-2.159,0,0,0,0,0,0,0L.541,6.121c-.225,.385-.226,.865-.004,1.252,.223,.387,.638,.627,1.084,.627H6.879c.446,0,.861-.24,1.084-.627Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Shapes3;