import React from 'react';
import IconProps from "@/types/icon.types"

function Earth3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M12.955,3.741c.204,.033,.414-.022,.577-.149l.153-.119c-1.264-1.073-2.898-1.722-4.685-1.722C5.838,1.75,3.156,3.778,2.165,6.601c.682,1.534,1.562,2.732,2.649,3.526l.238,.169c.089,.062,.176,.123,.26,.185,.008,.006,.016,.012,.023,.018,.294,.22,.549,.461,.678,.819,.094,.262,.083,.47,.068,.733-.021,.393-.049,.881,.292,1.447,.313,.52,.718,.733,1.014,.889,.226,.119,.33,.178,.426,.323,.279,.418,.139,1.06,.066,1.316-.012,.043-.024,.082-.037,.125,.378,.061,.762,.101,1.157,.101,3.08,0,5.705-1.924,6.756-4.634-.483-1.093-1.095-1.707-1.865-1.853-.814-.154-1.425,.274-1.918,.618-.416,.289-.686,.468-.959,.413-.157-.029-.231-.102-.48-.401-.232-.278-.55-.66-1.092-.978-.881-.516-1.975-.648-3.259-.395-.127-.359-.222-.881,.022-1.376,.053-.107,.343-.65,.871-.796,.418-.116,.823,.082,1.249,.291,.477,.234,1.129,.554,1.759,.154,.706-.45,.629-1.294,.567-1.973-.045-.49-.096-1.046,.124-1.32,.271-.339,1.067-.434,2.181-.259Z" fill={secondaryfill}/>
		<path d="M9,17c-4.411,0-8-3.589-8-8S4.589,1,9,1s8,3.589,8,8-3.589,8-8,8Zm0-14.5c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5,6.5-2.916,6.5-6.5-2.916-6.5-6.5-6.5Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Earth3;