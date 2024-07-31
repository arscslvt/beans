import React from 'react';
import IconProps from "@/types/icon.types"

function PenSparkle3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M5.493,3.492l-.946-.315-.316-.947c-.102-.306-.609-.306-.711,0l-.316,.947-.946,.315c-.153,.051-.257,.194-.257,.356s.104,.305,.257,.356l.946,.315,.316,.947c.051,.153,.194,.256,.355,.256s.305-.104,.355-.256l.316-.947,.946-.315c.153-.051,.257-.194,.257-.356s-.104-.305-.257-.356Z" fill={secondaryfill}/>
		<path d="M16.658,12.99l-1.263-.421-.421-1.263c-.137-.408-.812-.408-.949,0l-.421,1.263-1.263,.421c-.204,.068-.342,.259-.342,.474s.138,.406,.342,.474l1.263,.421,.421,1.263c.068,.204,.26,.342,.475,.342s.406-.138,.475-.342l.421-1.263,1.263-.421c.204-.068,.342-.259,.342-.474s-.138-.406-.342-.474Z" fill={secondaryfill}/>
		<path d="M15.151,2.848c-.998-.998-2.739-.998-3.737,0L3.605,10.657c-.862,.863-1.401,3.406-1.594,4.459-.044,.242,.034,.49,.208,.665,.142,.142,.333,.22,.53,.22,.045,0,.09-.004,.134-.012,1.053-.191,3.595-.729,4.46-1.593l7.808-7.809c1.03-1.03,1.03-2.708,0-3.738Z" fill={fill}/>
		<circle cx="7.75" cy="1.75" fill={secondaryfill} r=".75"/>
	</g>
</svg>
	);
}

export default PenSparkle3;