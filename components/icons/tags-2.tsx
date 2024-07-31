import React from 'react';
import IconProps from "@/types/icon.types"

function Tags2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M1.75,4.25H7.336c.265,0,.52,.105,.707,.293l5.793,5.793c.781,.781,.781,2.047,0,2.828l-3.172,3.172c-.781,.781-2.047,.781-2.828,0L2.043,10.543c-.188-.188-.293-.442-.293-.707V4.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M3.25,1.75v-.5h5.586c.265,0,.52,.105,.707,.293l5.793,5.793c.432,.432,.625,1.012,.579,1.577" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<circle cx="5.25" cy="7.75" fill={secondaryfill} r="1.25"/>
	</g>
</svg>
	);
}

export default Tags2;