import React from 'react';
import IconProps from "@/types/icon.types"

function CrosshairsSlash3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M11.12,6.88c-.543-.543-1.293-.88-2.12-.88-1.654,0-3,1.346-3,3,0,.827,.336,1.577,.88,2.12l4.241-4.241Z" fill={secondaryfill}/>
		<path d="M1,9.75h.789c.176,1.7,.941,3.228,2.087,4.374l1.06-1.06c-1.041-1.041-1.686-2.479-1.686-4.064,0-3.17,2.58-5.75,5.75-5.75,1.585,0,3.023,.645,4.064,1.686l1.06-1.06c-1.146-1.146-2.674-1.912-4.374-2.087v-.789c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v.789c-3.4,.351-6.11,3.061-6.461,6.461h-.789c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z" fill={fill}/>
		<path d="M17,8.25h-.789c-.093-.902-.362-1.75-.756-2.523l-1.125,1.125c.269,.664,.42,1.388,.42,2.148,0,3.17-2.58,5.75-5.75,5.75-.76,0-1.484-.152-2.148-.42l-1.125,1.125c.774,.394,1.621,.663,2.523,.756v.789c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-.789c3.4-.351,6.11-3.061,6.461-6.461h.789c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z" fill={fill}/>
		<path d="M2,16.75c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061L15.47,1.47c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061L2.53,16.53c-.146,.146-.338,.22-.53,.22Z" fill={secondaryfill}/>
	</g>
</svg>
	);
}

export default CrosshairsSlash3;