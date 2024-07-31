import React from 'react';
import IconProps from "@/types/icon.types"

function FacePlus3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M16.786,7.192c-.358,.77-1.133,1.308-2.036,1.308-1.241,0-2.25-1.009-2.25-2.25v-.25h-.25c-1.241,0-2.25-1.009-2.25-2.25,0-1.108,.807-2.027,1.864-2.211-.891-.343-1.854-.539-2.864-.539C4.589,1,1,4.589,1,9s3.589,8,8,8,8-3.589,8-8c0-.623-.079-1.226-.214-1.808Zm-11.786,1.808c0-.552,.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm6.884,3.16c-.631,.996-1.709,1.59-2.884,1.59s-2.253-.595-2.884-1.59c-.222-.35-.117-.813,.232-1.035,.349-.221,.813-.118,1.035,.232,.354,.559,.958,.893,1.616,.893s1.262-.334,1.616-.893c.222-.35,.684-.454,1.035-.232,.35,.222,.454,.685,.232,1.035Zm.116-2.16c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Z" fill={fill}/>
		<path d="M17.25,3h-1.75V1.25c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v1.75h-1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h1.75v1.75c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.75h1.75c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z" fill={secondaryfill}/>
	</g>
</svg>
	);
}

export default FacePlus3;