import React from 'react';
import IconProps from "@/types/icon.types"

function AlarmClock3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M16.5,4.25c-.192,0-.384-.073-.53-.22l-2-2c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l2,2c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z" fill={secondaryfill}/>
		<path d="M1.5,4.25c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061L2.97,.97c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-2,2c-.146,.146-.338,.22-.53,.22Z" fill={secondaryfill}/>
		<path d="M14.447,13.386c.969-1.201,1.553-2.726,1.553-4.386,0-3.86-3.14-7-7-7S2,5.14,2,9c0,1.66,.584,3.185,1.553,4.386l-1.333,1.333c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l1.333-1.333c1.201,.969,2.726,1.553,4.387,1.553s3.185-.583,4.387-1.553l1.333,1.333c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-1.333-1.333Zm-2.064-2.234c-.143,.225-.386,.347-.633,.347-.138,0-.277-.038-.402-.117l-2.75-1.75c-.216-.138-.347-.376-.347-.633v-3.25c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2.838l2.403,1.529c.349,.223,.452,.686,.23,1.036Z" fill={fill}/>
	</g>
</svg>
	);
}

export default AlarmClock3;