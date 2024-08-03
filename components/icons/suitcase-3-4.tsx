import React from 'react';
import IconProps from "@/types/icon.types"

function Suitcase34(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M11.75,5.5c-.414,0-.75-.336-.75-.75V2.25c0-.138-.112-.25-.25-.25h-3.5c-.138,0-.25,.112-.25,.25v2.5c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75V2.25c0-.965,.785-1.75,1.75-1.75h3.5c.965,0,1.75,.785,1.75,1.75v2.5c0,.414-.336,.75-.75,.75Z" fill={secondaryfill}/>
		<path d="M17,7.519v-.769c0-1.517-1.233-2.75-2.75-2.75H3.75c-1.517,0-2.75,1.233-2.75,2.75v.769c2.184,1.149,4.643,1.83,7.25,1.943v-.212c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v.212c2.607-.113,5.066-.794,7.25-1.943Z" fill={fill}/>
		<path d="M9.75,10.962v.538c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-.538c-2.586-.103-5.034-.728-7.25-1.78v4.068c0,1.517,1.233,2.75,2.75,2.75H14.25c1.517,0,2.75-1.233,2.75-2.75v-4.068c-2.216,1.051-4.664,1.677-7.25,1.78Z" fill={secondaryfill}/>
	</g>
</svg>
	);
}

export default Suitcase34;