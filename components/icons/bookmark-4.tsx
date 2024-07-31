import React from 'react';
import IconProps from "@/types/icon.types"

function Bookmark4(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M12.25,1H5.75c-1.517,0-2.75,1.233-2.75,2.75v12.5c0,.276,.152,.531,.396,.661,.244,.131,.54,.117,.77-.037l4.834-3.223,4.834,3.223c.125,.083,.271,.126,.416,.126,.122,0,.243-.029,.354-.089,.244-.13,.396-.385,.396-.661V3.75c0-1.517-1.233-2.75-2.75-2.75Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Bookmark4;