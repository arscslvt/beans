import React from 'react';
import IconProps from "@/types/icon.types"

function BoxArchive4(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M15.25,2H2.75c-.965,0-1.75,.785-1.75,1.75v1.5c0,.879,.654,1.602,1.5,1.725v6.275c0,1.517,1.233,2.75,2.75,2.75h7.5c1.517,0,2.75-1.233,2.75-2.75V6.975c.846-.123,1.5-.845,1.5-1.725v-1.5c0-.965-.785-1.75-1.75-1.75Zm-4.25,8H7c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h4c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm4.5-4.75c0,.138-.112,.25-.25,.25H2.75c-.138,0-.25-.112-.25-.25v-1.5c0-.138,.112-.25,.25-.25H15.25c.138,0,.25,.112,.25,.25v1.5Z" fill={fill}/>
	</g>
</svg>
	);
}

export default BoxArchive4;