import React from 'react';
import IconProps from "@/types/icon.types"

function ScissorsCoupon21(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M11.4784 6.36469C12.4288 6.98227 12.7811 8.22972 12.2583 9.26456C11.6979 10.3737 10.3446 10.8186 9.23542 10.2583L7.21463 9.23738C6.97443 11.2147 5.29146 12.747 3.25 12.75V12.75C3.25 13.8546 4.14543 14.75 5.25 14.75H14.25C15.3546 14.75 16.25 13.8546 16.25 12.75V7.75C16.25 6.64543 15.3546 5.75 14.25 5.75H11.4784V6.36469ZM3.4596 9.20126L3.46555 9.19827L3.47824 9.19186C3.4721 9.19512 3.46589 9.19826 3.4596 9.20126Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M3.24402 4.5C4.21052 4.5 4.99402 3.7165 4.99402 2.75C4.99402 1.7835 4.21052 1 3.24402 1C2.27752 1 1.49402 1.7835 1.49402 2.75C1.49402 3.7165 2.27752 4.5 3.24402 4.5Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M2.45099 4.31L10.25 8.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M3.24402 10.5C4.21052 10.5 4.99402 9.7165 4.99402 8.75C4.99402 7.7835 4.21052 7 3.24402 7C2.27752 7 1.49402 7.7835 1.49402 8.75C1.49402 9.7165 2.27752 10.5 3.24402 10.5Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M2.45099 7.19L10.25 3.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M11.75 5.75H14.25C15.355 5.75 16.25 6.645 16.25 7.75V12.75C16.25 13.855 15.355 14.75 14.25 14.75H5.25C4.145 14.75 3.25 13.855 3.25 12.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default ScissorsCoupon21;