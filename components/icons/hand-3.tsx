import React from 'react';
import IconProps from "@/types/icon.types"

function Hand3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M15,2c-.552,0-1,.448-1,1v5c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5V2.25c0-.552-.448-1-1-1s-1,.448-1,1v5.75c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5V1.5c0-.552-.448-1-1-1s-1,.448-1,1v6.5c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5V2.25c0-.552-.448-1-1-1s-1,.448-1,1V11.423l-.014-.02-1.768-2.252c-.426-.543-1.215-.635-1.755-.211-.54,.424-.604,1.131-.211,1.755l2.551,3.924c.738,1.135,2.209,2.382,5.197,2.382h3c2.209,0,4-1.791,4-4V3c0-.552-.448-1-1-1Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Hand3;