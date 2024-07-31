import React from 'react';
import IconProps from "@/types/icon.types"

function BugSlash3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M12.62,5.38c-.193-.112-.402-.201-.62-.266v-.614c0-1.654-1.346-3-3-3s-3,1.346-3,3v.617c-.72,.206-1.313,.692-1.662,1.339-.906-.19-1.588-.995-1.588-1.956,0-.414-.336-.75-.75-.75s-.75,.336-.75,.75c0,1.672,1.18,3.07,2.75,3.415v1.085H1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h2.25v.5c0,.865,.233,1.67,.623,2.377l7.998-7.998Zm-3.62-2.38c.827,0,1.5,.673,1.5,1.5v.5h-3v-.5c0-.827,.673-1.5,1.5-1.5Z" fill={fill}/>
		<path d="M8.25,15.924v-2.993l-2.121,2.121c.622,.438,1.337,.752,2.121,.872Z" fill={fill}/>
		<path d="M14,10.5h2.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-2.25v-1.25c0-.177-.02-.349-.052-.516l-4.198,4.198v4.493c1.702-.259,3.112-1.378,3.797-2.894,.961,.145,1.703,.969,1.703,1.97,0,.414,.336,.75,.75,.75s.75-.336,.75-.75c0-1.691-1.206-3.105-2.802-3.429,.022-.189,.052-.375,.052-.571v-.5Z" fill={fill}/>
		<path d="M2,16.75c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061L15.47,1.47c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061L2.53,16.53c-.146,.146-.338,.22-.53,.22Z" fill={secondaryfill}/>
	</g>
</svg>
	);
}

export default BugSlash3;