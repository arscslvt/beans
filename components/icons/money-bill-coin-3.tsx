import React from 'react';
import IconProps from "@/types/icon.types"

function MoneyBillCoin3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M18,9.25v-1c0-.965-.785-1.75-1.75-1.75h-4.5c-.965,0-1.75,.785-1.75,1.75v1c0,.138,.02,.27,.05,.398-.617,.271-1.05,.886-1.05,1.602v1c0,.716,.433,1.331,1.05,1.602-.03,.128-.05,.261-.05,.398v1c0,.965,.785,1.75,1.75,1.75h4.5c.965,0,1.75-.785,1.75-1.75v-1c0-.716-.433-1.331-1.05-1.602,.03-.128,.05-.261,.05-.398v-1c0-.138-.02-.27-.05-.398,.617-.271,1.05-.886,1.05-1.602Zm-6.5-1c0-.138,.112-.25,.25-.25h4.5c.138,0,.25,.112,.25,.25v1c0,.138-.112,.25-.25,.25h-4.5c-.138,0-.25-.112-.25-.25v-1Zm5,7c0,.138-.112,.25-.25,.25h-4.5c-.138,0-.25-.112-.25-.25v-1c0-.138,.112-.25,.25-.25h4.5c.138,0,.25,.112,.25,.25v1Z" fill={secondaryfill}/>
		<path d="M14.25,1H3.75c-1.519,0-2.75,1.231-2.75,2.75v6.5c0,1.519,1.231,2.75,2.75,2.75h3.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-1.826c-.299-1.467-1.457-2.625-2.924-2.924v-3.151c1.467-.299,2.625-1.457,2.924-2.924h7.151c.35,1.716,1.875,3.009,3.694,3,.405-.002,.731-.345,.731-.75v-1c0-1.519-1.231-2.75-2.75-2.75Z" fill={fill}/>
		<path d="M8.5,8.907v-.657c0-1.526,1.061-2.801,2.481-3.148-.501-.523-1.202-.852-1.981-.852-1.517,0-2.75,1.233-2.75,2.75,0,1.161,.725,2.151,1.744,2.553,.144-.234,.307-.455,.506-.646Z" fill={fill}/>
	</g>
</svg>
	);
}

export default MoneyBillCoin3;