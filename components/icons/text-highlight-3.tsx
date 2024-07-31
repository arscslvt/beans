import React from 'react';
import IconProps from "@/types/icon.types"

function TextHighlight3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M14.25,16H6.545c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h7.705c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z" fill={secondaryfill}/>
		<path d="M12.743,2.136l-1.557-.786c-1.228-.62-2.737-.23-3.511,.906L3.908,7.778c-.283,.417-.374,.935-.248,1.422,.06,.234,.17,.449,.316,.636,.695,1.749,.034,3.225-.107,3.503,0,0,0,.001,0,.002l-.788,1.572c-.117,.233-.104,.509,.031,.73,.137,.221,.379,.356,.639,.356h2.795c.283,0,.542-.159,.669-.412l.226-.446c.141-.279,.935-1.688,2.758-2.167,.014,0,.027,.005,.041,.005,.222,0,.443-.042,.654-.127,.467-.188,.831-.569,.998-1.045l2.208-6.308c.454-1.298-.129-2.744-1.356-3.364ZM6.492,13.823l-.999-.505c.19-.574,.36-1.409,.271-2.387l2.488,1.256c-.84,.509-1.41,1.142-1.76,1.636Z" fill={fill}/>
	</g>
</svg>
	);
}

export default TextHighlight3;