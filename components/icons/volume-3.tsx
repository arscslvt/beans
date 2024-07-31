import React from 'react';
import IconProps from "@/types/icon.types"

function Volume3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M14.35,1.567c-.4-.219-.889-.203-1.273,.044l-5.295,3.389h-3.531c-1.241,0-2.25,1.009-2.25,2.25v3.5c0,1.241,1.009,2.25,2.25,2.25h3.531l5.295,3.389c.205,.131,.439,.198,.675,.198,.206,0,.412-.051,.599-.153,.401-.219,.65-.64,.65-1.097V2.664c0-.457-.249-.877-.65-1.097Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Volume3;