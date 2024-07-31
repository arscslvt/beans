import React from 'react';
import IconProps from "@/types/icon.types"

function MagnifierFaceWorried3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M15.25,16c-.192,0-.384-.073-.53-.22l-3.965-3.965c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l3.965,3.965c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z" fill={secondaryfill}/>
		<path d="M7.75,2c-3.17,0-5.75,2.58-5.75,5.75s2.58,5.75,5.75,5.75,5.75-2.58,5.75-5.75S10.92,2,7.75,2Zm-2.25,6c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75,.75,.336,.75,.75-.336,.75-.75,.75Zm3.25,2h-2c-.276,0-.5-.224-.5-.5,0-.828,.672-1.5,1.5-1.5s1.5,.672,1.5,1.5c0,.276-.224,.5-.5,.5Zm1.25-2c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75,.75,.336,.75,.75-.336,.75-.75,.75Z" fill={fill}/>
	</g>
</svg>
	);
}

export default MagnifierFaceWorried3;