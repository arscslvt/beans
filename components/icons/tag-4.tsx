import React from 'react';
import IconProps from "@/types/icon.types"

function Tag4(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M15.866,8.056L10.116,2.306c-.52-.52-1.21-.806-1.944-.806H3.25c-.965,0-1.75,.785-1.75,1.75v4.921c0,.735,.286,1.425,.806,1.945l5.75,5.75c.536,.536,1.24,.804,1.944,.804s1.408-.268,1.944-.804l3.922-3.922c.52-.519,.806-1.209,.806-1.944s-.286-1.425-.806-1.944Zm-9.616-.556c-.689,0-1.25-.561-1.25-1.25s.561-1.25,1.25-1.25,1.25,.561,1.25,1.25-.561,1.25-1.25,1.25Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Tag4;