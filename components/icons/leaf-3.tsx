import React from 'react';
import IconProps from "@/types/icon.types"

function Leaf3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M13.923,1.389c-.135-.247-.369-.409-.679-.389-.28,.008-.534,.172-.655,.426-.833,1.741-2.247,2.352-3.884,3.058-1.372,.592-2.79,1.204-3.879,2.547-.855,1.053-1.326,2.316-1.326,3.555,0,1.45,.574,2.766,1.502,3.739,1.431-.919,3.217-2.458,4.592-4.938,.202-.362,.657-.493,1.02-.292s.493,.657,.293,1.02c-1.391,2.509-3.143,4.143-4.651,5.189,.781,.442,1.681,.698,2.64,.698,2.238,0,4.121-1.099,5.302-3.095,1.848-3.123,1.735-7.858-.273-11.516Z" fill={fill}/>
		<path d="M5.002,14.324c-1.374,.883-2.42,1.194-2.452,1.203-.398,.11-.633,.522-.522,.921,.091,.333,.393,.551,.723,.551,.065,0,.133-.009,.199-.027,.108-.03,1.539-.446,3.306-1.671-.465-.263-.886-.594-1.253-.978Z" fill={secondaryfill}/>
	</g>
</svg>
	);
}

export default Leaf3;