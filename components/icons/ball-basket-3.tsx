import React from 'react';
import IconProps from "@/types/icon.types"

function BallBasket3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M4.539,11.032c-1.055-.191-2.069-.453-3.021-.793-.152-.054-.292-.124-.44-.183,.144,1.088,.507,2.105,1.044,3.01,.203-.15,.414-.295,.634-.429,.053-.031,.858-.487,1.952-.685-.071-.293-.121-.605-.169-.92Z" fill={fill}/>
		<path d="M4.417,9.468c0-.091-.013-.174-.011-.266,.005-.219,.024-.429,.042-.64-1.232-.338-1.465-1.438-1.634-2.285-.083-.417-.168-.849-.349-1.241-.05-.109-.13-.223-.202-.335-.696,1.087-1.135,2.351-1.234,3.71,.321,.151,.651,.293,.994,.415,.755,.27,1.563,.473,2.394,.642Z" fill={secondaryfill}/>
		<path d="M14.041,15.074c-2.367,.371-4.288-.39-5.832-1-.472-.187-.912-.36-1.326-.49,.469,.956,.996,1.665,1.326,2.05,.349,.394,.954,.857,1.634,1.321,1.673-.176,3.189-.874,4.394-1.921-.066,.013-.129,.029-.197,.041Z" fill={secondaryfill}/>
		<path d="M9.176,5.377c1.233-1.026,2.631-2.189,5.013-2.189,.102,0,.199,.004,.298,.006-.984-.93-2.202-1.611-3.556-1.948-.629,.28-1.231,.631-1.807,1.097-.026,.021-2.101,1.737-2.905,4.732,1.192-.242,2.027-.923,2.957-1.697Z" fill={fill}/>
		<path d="M7.078,16.619c-.478-.558-1.299-1.678-1.908-3.224-.918,.121-1.64,.526-1.648,.531-.18,.11-.351,.229-.518,.353,1.099,1.246,2.575,2.149,4.251,2.524-.06-.062-.125-.124-.178-.184Z" fill={secondaryfill}/>
		<path d="M3.828,4.409c.255,.554,.363,1.098,.458,1.577,.125,.632,.202,.93,.395,1.07,.844-3.678,3.373-5.777,3.5-5.88,.066-.053,.134-.094,.2-.145-2.016,.156-3.823,1.059-5.146,2.436,.24,.31,.448,.626,.593,.941Z" fill={fill}/>
		<path d="M10.135,6.53c-1.083,.901-2.301,1.903-4.189,2.102-.018,.198-.035,.397-.04,.604-.004,.168,.015,.322,.02,.485,.067,.008,.129,.025,.197,.033,3.257,.366,6.66-.134,9.841-1.447,.333-.156,.632-.316,.941-.474-.164-1.115-.556-2.154-1.132-3.07-.501-.045-1.028-.074-1.584-.074-1.839,0-2.865,.854-4.054,1.842Z" fill={secondaryfill}/>
		<path d="M8.213,11.37c-.71,0-1.417-.04-2.119-.114,.046,.227,.1,.443,.159,.656,.824,.112,1.647,.426,2.508,.767,1.516,.601,3.083,1.221,5.027,.917,.768-.141,1.456-.338,2.102-.551,.624-1.06,1.009-2.273,1.086-3.57-.14,.068-.263,.137-.408,.205-2.713,1.12-5.558,1.691-8.355,1.691Z" fill={fill}/>
	</g>
</svg>
	);
}

export default BallBasket3;