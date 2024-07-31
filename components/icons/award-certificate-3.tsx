import React from 'react';
import IconProps from "@/types/icon.types"

function AwardCertificate3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M17.75,12c0-1.792-1.458-3.25-3.25-3.25s-3.25,1.458-3.25,3.25c0,1.034,.495,1.946,1.25,2.542v2.958c0,.202,.122,.385,.309,.462,.187,.079,.401,.035,.545-.108l1.146-1.146,1.146,1.146c.096,.096,.224,.146,.354,.146,.064,0,.13-.012,.191-.038,.187-.077,.309-.26,.309-.462v-2.958c.755-.596,1.25-1.508,1.25-2.542Zm-3.25-1.75c.965,0,1.75,.785,1.75,1.75s-.785,1.75-1.75,1.75-1.75-.785-1.75-1.75,.785-1.75,1.75-1.75Z" fill={secondaryfill}/>
		<path d="M11,15.191c-.802-.871-1.25-1.999-1.25-3.191,0-2.619,2.131-4.75,4.75-4.75,.344,0,.677,.041,1,.11V3.75c0-1.517-1.233-2.75-2.75-2.75H4.25c-1.517,0-2.75,1.233-2.75,2.75V14.25c0,1.517,1.233,2.75,2.75,2.75h6.75v-1.809ZM5.25,5h6c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75H5.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75Zm2.5,8h-2.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm0-3.25h-2.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z" fill={fill}/>
	</g>
</svg>
	);
}

export default AwardCertificate3;