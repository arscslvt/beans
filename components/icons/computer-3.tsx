import React from 'react';
import IconProps from "@/types/icon.types"

function Computer3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M5.25,11.5H2.75c-.965,0-1.75-.785-1.75-1.75V5.25c0-.965,.785-1.75,1.75-1.75h2.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75H2.75c-.138,0-.25,.112-.25,.25v4.5c0,.138,.112,.25,.25,.25h2.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z" fill={secondaryfill}/>
		<path d="M2.753,14.747c-.226,0-.447-.1-.595-.292-.251-.326-.194-.792,.13-1.045,.047-.038,1.182-.91,2.962-.91,.414,0,.75,.336,.75,.75s-.336,.75-.75,.75c-1.242,0-2.035,.588-2.043,.594-.136,.103-.296,.152-.454,.152Z" fill={secondaryfill}/>
		<path d="M14.75,2h-5.5c-1.24,0-2.25,1.009-2.25,2.25V13.75c0,1.241,1.01,2.25,2.25,2.25h5.5c1.24,0,2.25-1.009,2.25-2.25V4.25c0-1.241-1.01-2.25-2.25-2.25Zm-2.75,11c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm1.25-4h-2.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm0-2.5h-2.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Computer3;