import React from 'react';
import IconProps from "@/types/icon.types"

function GemSparkle3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M16.277,5.61l-.586-.624c-.284-.303-.76-.316-1.06-.033-.298,.28-.313,.744-.041,1.046h-2.191l-1.147-2.2c.15-.137,.248-.33,.248-.55,0-.414-.336-.75-.75-.75H5.411c-.485,0-.953,.202-1.285,.554L1.723,5.61c-.581,.618-.633,1.557-.123,2.234l5.993,7.956c.335,.445,.848,.7,1.407,.7s1.072-.255,1.407-.7l5.993-7.956c.51-.677,.458-1.617-.123-2.234Zm-9.211,1.89h3.867l-1.934,6.405-1.934-6.405Zm-1.848-3.418c.049-.052,.119-.082,.192-.082h1.233l-1.042,2H3.415l1.804-1.918Z" fill={fill}/>
		<path d="M15.743,1.992l-.946-.315-.316-.947c-.102-.306-.609-.306-.711,0l-.316,.947-.946,.315c-.153,.051-.257,.194-.257,.356s.104,.305,.257,.356l.946,.315,.316,.947c.051,.153,.194,.256,.355,.256s.305-.104,.355-.256l.316-.947,.946-.315c.153-.051,.257-.194,.257-.356s-.104-.305-.257-.356Z" fill={secondaryfill}/>
		<circle cx="1.75" cy="2.25" fill={secondaryfill} r=".75"/>
	</g>
</svg>
	);
}

export default GemSparkle3;