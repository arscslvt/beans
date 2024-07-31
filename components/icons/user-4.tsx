import React from 'react';
import IconProps from "@/types/icon.types"

function User4(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<circle cx="9" cy="4.5" fill={secondaryfill} r="3.5"/>
		<path d="M9,9c-2.764,0-5.274,1.636-6.395,4.167-.257,.58-.254,1.245,.008,1.825,.268,.591,.777,1.043,1.399,1.239,1.618,.51,3.296,.769,4.987,.769s3.369-.259,4.987-.769c.622-.196,1.132-.648,1.399-1.239,.262-.58,.265-1.245,.008-1.825-1.121-2.531-3.631-4.167-6.395-4.167Z" fill={fill}/>
	</g>
</svg>
	);
}

export default User4;