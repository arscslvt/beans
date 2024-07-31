import React from 'react';
import IconProps from "@/types/icon.types"

function Headset3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M10.709,17h-1.959c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h1.959c.586,0,1.087-.399,1.219-.971l.343-1.451c.095-.403,.498-.65,.902-.558,.402,.095,.652,.5,.557,.902l-.342,1.447c-.287,1.253-1.39,2.131-2.679,2.131Z" fill={secondaryfill}/>
		<path d="M14.137,14h-1.137c-.227,0-.441-.103-.584-.279-.143-.176-.197-.408-.149-.629l1.084-5c.104-.422,.149-.762,.149-1.091,0-2.481-2.019-4.5-4.5-4.5s-4.5,2.019-4.5,4.5c0,.329,.046,.669,.145,1.071l1.089,5.02c.048,.222-.007,.453-.149,.629-.143,.177-.357,.279-.584,.279h-1.137c-1.285,0-2.416-.912-2.688-2.167l-.335-1.545c-.265-1.224,.332-2.473,1.449-3.037l.712-.359c.059-3.258,2.727-5.891,5.999-5.891s5.94,2.633,5.999,5.891l.712,.359c1.117,.564,1.714,1.813,1.449,3.037l-.335,1.545c-.272,1.256-1.403,2.167-2.688,2.167Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Headset3;