import React from 'react';
import IconProps from "@/types/icon.types"

function CrosshairsSlash1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M13.5962 4.40379C12.4199 3.22753 10.7949 2.5 9 2.5C5.41015 2.5 2.5 5.41015 2.5 9C2.5 10.7949 3.22753 12.4199 4.40379 13.5962L7.409 10.591C7.00183 10.1838 6.75 9.62131 6.75 9C6.75 7.75736 7.75736 6.75 9 6.75C9.62131 6.75 10.1838 7.00183 10.591 7.409L13.5962 4.40379ZM10.5844 10.5976C10.5888 10.5932 10.5932 10.5888 10.5976 10.5844L14.9042 6.27774C15.2866 7.10581 15.5 8.02799 15.5 9C15.5 12.5899 12.5899 15.5 9 15.5C8.02799 15.5 7.10581 15.2866 6.27774 14.9042L10.5844 10.5976Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M15.012 6.524C15.327 7.287 15.5 8.124 15.5 9C15.5 12.59 12.59 15.5 8.99999 15.5C8.12299 15.5 7.28699 15.326 6.52399 15.012" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4.404 13.596C3.228 12.42 2.5 10.795 2.5 9C2.5 5.41 5.41 2.5 9 2.5C10.795 2.5 12.42 3.228 13.596 4.404" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M7.409 10.591C7.002 10.184 6.75 9.621 6.75 9C6.75 7.757 7.757 6.75 9 6.75C9.621 6.75 10.184 7.002 10.591 7.409" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 1V2.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M17 9H15.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 17V15.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M1 9H2.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M2 16L16 2" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default CrosshairsSlash1;