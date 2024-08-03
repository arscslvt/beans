import React from 'react';
import IconProps from "@/types/icon.types"

function Tags3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M15.916,9.663c-.021,0-.041,0-.062-.002-.413-.034-.721-.396-.687-.808,.029-.367-.103-.726-.362-.986L9.013,2.073c-.047-.046-.111-.073-.177-.073H3.957c-.103,.292-.381,.5-.707,.5-.414,0-.75-.336-.75-.75v-.5c0-.414,.336-.75,.75-.75h5.586c.461,0,.911,.187,1.237,.513l5.793,5.793c.571,.572,.862,1.362,.796,2.167-.031,.393-.359,.689-.746,.689Z" fill={secondaryfill}/>
		<path d="M14.366,9.806l-5.793-5.793c-.326-.326-.776-.513-1.237-.513H1.75c-.414,0-.75,.336-.75,.75v5.586c0,.467,.182,.907,.513,1.237l5.793,5.793c.536,.536,1.24,.804,1.944,.804s1.408-.268,1.944-.804l3.172-3.172c.52-.519,.806-1.209,.806-1.944s-.286-1.425-.806-1.944Zm-9.116-.806c-.689,0-1.25-.561-1.25-1.25s.561-1.25,1.25-1.25,1.25,.561,1.25,1.25-.561,1.25-1.25,1.25Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Tags3;