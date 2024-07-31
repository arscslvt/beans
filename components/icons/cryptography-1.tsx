import React from 'react';
import IconProps from "@/types/icon.types"

function Cryptography1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M7.25 7.75C8.07843 7.75 8.75 7.07843 8.75 6.25C8.75 5.42157 8.07843 4.75 7.25 4.75C6.42157 4.75 5.75 5.42157 5.75 6.25C5.75 7.07843 6.42157 7.75 7.25 7.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M10.75 13.25C11.5784 13.25 12.25 12.5784 12.25 11.75C12.25 10.9216 11.5784 10.25 10.75 10.25C9.92157 10.25 9.25 10.9216 9.25 11.75C9.25 12.5784 9.92157 13.25 10.75 13.25Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M7.25 7.75C8.07843 7.75 8.75 7.07843 8.75 6.25C8.75 5.42157 8.07843 4.75 7.25 4.75C6.42157 4.75 5.75 5.42157 5.75 6.25C5.75 7.07843 6.42157 7.75 7.25 7.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M16.25 6.5V11.881C16.25 12.146 16.145 12.401 15.957 12.588L12.588 15.957C12.4 16.145 12.146 16.25 11.881 16.25H5.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6.75 10.25V12.586C6.75 12.851 6.855 13.106 7.043 13.293L7.75 14" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M3.25 14.25L4.042 13.225C4.177 13.05 4.25 12.835 4.25 12.614V9.437C4.25 9.158 4.366 8.892 4.571 8.703L6.137 7.253" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M10.75 13.25C11.5784 13.25 12.25 12.5784 12.25 11.75C12.25 10.9216 11.5784 10.25 10.75 10.25C9.92157 10.25 9.25 10.9216 9.25 11.75C9.25 12.5784 9.92157 13.25 10.75 13.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M11.25 7.75V5.414C11.25 5.149 11.145 4.894 10.957 4.707L10.25 4" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M14.75 3.75L13.958 4.775C13.823 4.95 13.75 5.165 13.75 5.386V8.563C13.75 8.842 13.634 9.108 13.429 9.297L11.863 10.747" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M12.25 1.75H6.119C5.854 1.75 5.599 1.855 5.412 2.043L2.043 5.412C1.855 5.6 1.75 5.854 1.75 6.119V11.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Cryptography1;