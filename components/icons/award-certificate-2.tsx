import React from 'react';
import IconProps from "@/types/icon.types"

function AwardCertificate2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M14.5,14.5c-.822,0-1.544-.402-2-1.014v4.014c0,.202,.122,.385,.309,.462,.187,.079,.401,.035,.545-.108l1.146-1.146,1.146,1.146c.096,.096,.224,.146,.354,.146,.064,0,.13-.012,.191-.038,.187-.077,.309-.26,.309-.462v-4.014c-.456,.612-1.178,1.014-2,1.014Z" fill={secondaryfill}/>
		<path d="M10.75,16.25H4.25c-1.105,0-2-.895-2-2V3.75c0-1.105,.895-2,2-2H12.75c1.105,0,2,.895,2,2v3.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="5.25" x2="11.75" y1="5.75" y2="5.75"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="5.25" x2="8.25" y1="9" y2="9"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="5.25" x2="8.25" y1="12.25" y2="12.25"/>
		<circle cx="14.5" cy="12" fill="none" r="2.5" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default AwardCertificate2;