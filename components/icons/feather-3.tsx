import React from 'react';
import IconProps from "@/types/icon.types"

function Feather3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M12.259,10.858c-.36,0-.755-.023-1.192-.069-.412-.043-.71-.413-.667-.825,.043-.412,.409-.711,.825-.667,1.405,.149,2.158,.017,2.695-.311,.502-.418,.899-.998,1.116-1.831,.139-.612,.228-1.204,.313-1.776,.135-.901,.262-1.751,.551-2.256,.139-.242,.132-.542-.019-.777-.15-.235-.417-.373-.697-.343C3.521,3.023,2.019,15.044,2.005,15.165c-.047,.411,.248,.782,.659,.83,.029,.003,.058,.005,.087,.005,.375,0,.7-.282,.744-.664,.017-.143,.174-1.323,.711-2.88,.81,.363,1.612,.523,1.659,.531,.854,.156,1.643,.234,2.367,.234,1.507,0,2.73-.338,3.65-1.01,.506-.37,.898-.847,1.198-1.406-.254,.031-.522,.052-.822,.052Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Feather3;