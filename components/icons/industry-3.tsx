import React from 'react';
import IconProps from "@/types/icon.types"

function Industry3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M4,3.348c-.132,0-.266-.035-.386-.107-.355-.214-.469-.675-.256-1.03,.45-.747,1.271-1.211,2.143-1.211h1.75c.383,0,.738-.224,.903-.569,.179-.373,.626-.532,1-.353,.374,.179,.532,.627,.353,1-.414,.864-1.299,1.422-2.256,1.422h-1.75c-.354,0-.675,.181-.857,.485-.141,.233-.389,.363-.643,.363Z" fill={secondaryfill}/>
		<path d="M16.565,5.069c-.266-.122-.578-.08-.801,.109l-3.764,3.199v-2.628c0-.292-.17-.558-.436-.681-.265-.122-.578-.08-.8,.109l-4.696,3.997-.253-3.55c-.065-.911-.832-1.625-1.746-1.625h-.638c-.914,0-1.68,.714-1.746,1.625l-.607,8.5c-.035,.483,.135,.963,.464,1.317,.33,.354,.797,.558,1.281,.558H15.25c.965,0,1.75-.785,1.75-1.75V5.75c0-.292-.17-.558-.435-.681Zm-7.315,7.681h-.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm4,0h-.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Industry3;