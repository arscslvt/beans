import React from 'react';
import IconProps from "@/types/icon.types"

function Bicycle3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M13.75,15c-2.067,0-3.75-1.682-3.75-3.75s1.683-3.75,3.75-3.75,3.75,1.682,3.75,3.75-1.683,3.75-3.75,3.75Zm0-6c-1.24,0-2.25,1.009-2.25,2.25s1.01,2.25,2.25,2.25,2.25-1.009,2.25-2.25-1.01-2.25-2.25-2.25Z" fill={secondaryfill}/>
		<path d="M4.25,15c-2.067,0-3.75-1.682-3.75-3.75s1.683-3.75,3.75-3.75c.829,0,1.615,.265,2.273,.767,.329,.251,.393,.722,.142,1.051-.25,.329-.72,.394-1.052,.142-.395-.301-.866-.46-1.363-.46-1.24,0-2.25,1.009-2.25,2.25s1.01,2.25,2.25,2.25,2.25-1.009,2.25-2.25c0-.414,.336-.75,.75-.75s.75,.336,.75,.75c0,2.068-1.683,3.75-3.75,3.75Z" fill={secondaryfill}/>
		<path d="M13.851,4.99c-.405,.082-.668,.478-.586,.884,.082,.407,.474,.665,.885,.586,.928-.188,1.601-1.012,1.601-1.96,0-1.103-.897-2-2-2h-3.406c-.252,0-.486,.126-.626,.336-.139,.21-.163,.476-.064,.708l1.259,2.956h-3.119l-.87-2.044c-.118-.276-.39-.456-.69-.456h-1.982c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h1.486l.699,1.643-2.172,2.851c-.289,.381-.337,.883-.124,1.312,.213,.428,.642,.694,1.12,.694h2.984c.42,0,.81-.209,1.042-.56s.272-.792,.108-1.18l-.963-2.26h3.119l1.509,3.544c.122,.285,.399,.456,.69,.456,.099,0,.198-.019,.294-.06,.381-.162,.559-.603,.396-.984l-2.962-6.956h2.271c.275,0,.5,.224,.5,.5,0,.237-.168,.443-.399,.49ZM5.764,10.5l1.349-1.77,.754,1.77h-2.103Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Bicycle3;