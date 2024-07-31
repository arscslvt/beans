import React from 'react';
import IconProps from "@/types/icon.types"

function WindowPointer1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M1.75 4.75C1.75 3.64543 2.64543 2.75 3.75 2.75H14.25C15.3546 2.75 16.25 3.64543 16.25 4.75V7.75H1.75V4.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M11.126 10.768L17.066 12.938C17.316 13.029 17.309 13.386 17.055 13.467L14.336 14.337L13.466 17.056C13.385 17.31 13.028 17.317 12.937 17.067L10.767 11.127C10.685 10.904 10.902 10.687 11.126 10.768Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M4.25 6C4.66421 6 5 5.66421 5 5.25C5 4.83579 4.66421 4.5 4.25 4.5C3.83579 4.5 3.5 4.83579 3.5 5.25C3.5 5.66421 3.83579 6 4.25 6Z" fill={fill}/>
		<path d="M6.75 6C7.16421 6 7.5 5.66421 7.5 5.25C7.5 4.83579 7.16421 4.5 6.75 4.5C6.33579 4.5 6 4.83579 6 5.25C6 5.66421 6.33579 6 6.75 6Z" fill={fill}/>
		<path d="M1.75 7.75H16.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M16.25 9.978V4.75C16.25 3.646 15.355 2.75 14.25 2.75H3.75C2.645 2.75 1.75 3.646 1.75 4.75V13.25C1.75 14.354 2.645 15.25 3.75 15.25H9.612" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M11.126 10.768L17.066 12.938C17.316 13.029 17.309 13.386 17.055 13.467L14.336 14.337L13.466 17.056C13.385 17.31 13.028 17.317 12.937 17.067L10.767 11.127C10.685 10.904 10.902 10.687 11.126 10.768Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default WindowPointer1;