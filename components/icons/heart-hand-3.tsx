import React from 'react';
import IconProps from "@/types/icon.types"

function HeartHand3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M6.074,10.969l-.525-1.12c-.406-.868-.409-1.864-.01-2.734,.398-.869,1.159-1.517,2.085-1.777,.274-.077,.557-.116,.841-.116,1.133,0,2.192,.613,2.806,1.587,.439-.819,.73-1.751,.73-2.801,.007-1.923-1.554-3.497-3.493-3.509-.84,.011-1.637,.32-2.257,.856-.621-.536-1.421-.846-2.271-.856-1.925,.012-3.486,1.586-3.479,3.506,0,3.874,3.878,6.197,5.066,6.817,.16,.083,.333,.125,.507,.146Z" fill={secondaryfill}/>
		<path d="M16.554,10.604c-.989-.756-3.222-.922-5.323-.423l-1.111-2.363c-.371-.789-1.252-1.271-2.091-1.035-1.068,.3-1.572,1.467-1.122,2.43l2.147,4.576-1.67-.307c-.729-.134-1.512,.149-1.888,.788-.299,.509-.325,1.103-.083,1.62,.195,.418,.543,.734,.98,.892l2.109,.743c.895,.315,1.837,.476,2.786,.476h2.617c2.635,0,3.922-2.359,3.791-4.28-.111-1.638-.495-2.621-1.144-3.116Z" fill={fill}/>
	</g>
</svg>
	);
}

export default HeartHand3;