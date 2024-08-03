import React from 'react';
import IconProps from "@/types/icon.types"

function Handshake2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="12.345" x2="15.25" y1="11.75" y2="11.75"/>
		<path d="M8.779,4.67l-.231-.313c-.283-.382-.73-.608-1.206-.608h-1.458c-.388,0-.761,.151-1.041,.42l-1.867,1.8c-.07,.067-.148,.123-.232,.167" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M2.75,11.75h1.26c.303,0,.59,.138,.78,.374l1.083,1.349c.596,.742,1.632,.962,2.478,.525l3.274-1.693c1.111-.574,1.428-2.016,.661-3.003l-1.648-2.122" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15.258,6.138c-.085-.044-.163-.1-.233-.168l-1.867-1.8c-.28-.269-.653-.42-1.041-.42h-1.807c-.404,0-.791,.163-1.074,.453l-2.495,2.558c-.498,.51-.493,1.326,.011,1.83h0c.447,.447,1.15,.508,1.668,.145l2.83-1.985" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M.75,5.25H1.75c.552,0,1,.448,1,1v6c0,.552-.448,1-1,1H.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M17.25,5.25h-1c-.552,0-1,.448-1,1v6c0,.552,.448,1,1,1h1" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Handshake2;