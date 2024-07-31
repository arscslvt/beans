import React from 'react';
import IconProps from "@/types/icon.types"

function BasketShopping4(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M4.75,7c-.124,0-.249-.03-.364-.094-.362-.201-.493-.658-.292-1.02L6.594,1.386c.202-.363,.658-.492,1.02-.292,.362,.201,.493,.658,.292,1.02l-2.5,4.5c-.137,.247-.393,.386-.656,.386Z" fill={secondaryfill}/>
		<path d="M13.25,7c-.263,0-.519-.139-.656-.386l-2.5-4.5c-.201-.362-.071-.819,.292-1.02,.359-.201,.818-.071,1.02,.292l2.5,4.5c.201,.362,.071,.819-.292,1.02-.115,.064-.24,.094-.364,.094Z" fill={secondaryfill}/>
		<path d="M16.25,5.5H1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h.56l.54,6.479c.118,1.414,1.322,2.521,2.741,2.521h6.819c1.419,0,2.623-1.107,2.741-2.521l.54-6.479h.56c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z" fill={fill}/>
	</g>
</svg>
	);
}

export default BasketShopping4;