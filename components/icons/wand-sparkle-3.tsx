import React from 'react';
import IconProps from "@/types/icon.types"

function WandSparkle3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M15.478,3.358l-.835-.835c-.66-.662-1.813-.661-2.475,0L2.513,12.177c-.331,.331-.513,.77-.513,1.237s.182,.907,.513,1.237l.835,.835c.331,.331,.77,.513,1.238,.513s.907-.182,1.237-.513L15.478,5.833c.331-.331,.513-.77,.513-1.237s-.182-.907-.513-1.237Zm-1.061,1.414l-1.78,1.78-1.189-1.189,1.78-1.78c.064-.063,.138-.073,.177-.073s.113,.009,.177,.073l.836,.836c.063,.063,.073,.138,.073,.176s-.01,.113-.073,.177Z" fill={fill}/>
		<path d="M7.243,3.492l-.946-.315-.316-.947c-.102-.306-.609-.306-.711,0l-.316,.947-.946,.315c-.153,.051-.257,.194-.257,.356s.104,.305,.257,.356l.946,.315,.316,.947c.051,.153,.194,.256,.355,.256s.305-.104,.355-.256l.316-.947,.946-.315c.153-.051,.257-.194,.257-.356s-.104-.305-.257-.356Z" fill={secondaryfill}/>
		<path d="M16.658,11.99l-1.263-.421-.421-1.263c-.137-.408-.812-.408-.949,0l-.421,1.263-1.263,.421c-.204,.068-.342,.259-.342,.474s.138,.406,.342,.474l1.263,.421,.421,1.263c.068,.204,.26,.342,.475,.342s.406-.138,.475-.342l.421-1.263,1.263-.421c.204-.068,.342-.259,.342-.474s-.138-.406-.342-.474Z" fill={secondaryfill}/>
		<circle cx="9.25" cy="1.75" fill={secondaryfill} r=".75"/>
	</g>
</svg>
	);
}

export default WandSparkle3;