import React from 'react';
import IconProps from "@/types/icon.types"

function Watch3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M10.999,11c-.136,0-.272-.037-.396-.114l-2-1.25c-.22-.137-.353-.377-.353-.636v-2c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1.584l1.647,1.029c.352,.22,.458,.683,.238,1.034-.142,.228-.387,.353-.637,.353Z" fill={secondaryfill}/>
		<path d="M11.75,14H6.25c-1.517,0-2.75-1.233-2.75-2.75V6.75c0-1.517,1.233-2.75,2.75-2.75h5.5c1.517,0,2.75,1.233,2.75,2.75v4.5c0,1.517-1.233,2.75-2.75,2.75ZM6.25,5.5c-.689,0-1.25,.561-1.25,1.25v4.5c0,.689,.561,1.25,1.25,1.25h5.5c.689,0,1.25-.561,1.25-1.25V6.75c0-.689-.561-1.25-1.25-1.25H6.25Z" fill={fill}/>
		<path d="M12.446,5c.043-.119,.065-.245,.044-.373l-.361-2.166c-.142-.847-.868-1.461-1.726-1.461h-2.807c-.857,0-1.584,.614-1.727,1.462l-.36,2.165c-.021,.128,0,.254,.044,.373h6.893Z" fill={fill}/>
		<path d="M5.554,13c-.043,.119-.065,.245-.044,.373l.361,2.166c.142,.847,.868,1.461,1.726,1.461h2.807c.857,0,1.584-.614,1.727-1.462l.36-2.165c.021-.128,0-.254-.044-.373H5.554Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Watch3;