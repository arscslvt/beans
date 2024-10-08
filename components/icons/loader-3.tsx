import React from 'react';
import IconProps from "@/types/icon.types"

function Loader3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9,5c-.414,0-.75-.336-.75-.75V1.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2.5c0,.414-.336,.75-.75,.75Z" fill={fill}/>
		<path d="M12.359,6.391c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061l1.768-1.768c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-1.768,1.768c-.146,.146-.338,.22-.53,.22Z" fill={fill} opacity=".88"/>
		<path d="M16.25,9.75h-2.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z" fill={fill} opacity=".75"/>
		<path d="M14.126,14.876c-.192,0-.384-.073-.53-.22l-1.768-1.768c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l1.768,1.768c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z" fill={fill} opacity=".63"/>
		<path d="M9,17c-.414,0-.75-.336-.75-.75v-2.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2.5c0,.414-.336,.75-.75,.75Z" fill={fill} opacity=".5"/>
		<path d="M3.874,14.876c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061l1.768-1.768c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-1.768,1.768c-.146,.146-.338,.22-.53,.22Z" fill={fill} opacity=".38"/>
		<path d="M4.25,9.75H1.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z" fill={fill} opacity=".25"/>
		<path d="M5.641,6.391c-.192,0-.384-.073-.53-.22l-1.768-1.768c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l1.768,1.768c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z" fill={fill} opacity=".13"/>
	</g>
</svg>
	);
}

export default Loader3;