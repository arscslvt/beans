import React from 'react';
import IconProps from "@/types/icon.types"

function MsgBubbleUser3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M13.25,.5c-2.619,0-4.75,2.131-4.75,4.75,0,.83,.221,1.65,.615,2.326,.057,.184-.095,.843-.396,1.144-.209,.209-.276,.522-.17,.798,.105,.277,.364,.465,.66,.481,.049,.002,.1,.004,.15,.004,.628,0,1.36-.197,1.898-.443,.355,.166,.729,.286,1.114,.359,.289,.054,.584,.082,.877,.082,2.619,0,4.75-2.131,4.75-4.75S15.869,.5,13.25,.5Z" fill={secondaryfill}/>
		<path d="M.75,16.75h7.602c.24,0,.467-.115,.607-.31s.181-.445,.105-.674c-.642-1.954-2.455-3.266-4.514-3.266S.68,13.812,.037,15.766c-.075,.229-.036,.479,.105,.674,.141,.195,.367,.31,.607,.31Z" fill={fill}/>
		<circle cx="4.551" cy="8.75" fill={fill} r="2.75"/>
	</g>
</svg>
	);
}

export default MsgBubbleUser3;