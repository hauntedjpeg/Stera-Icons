import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LampRegularProps = Omit<IconBaseProps, 'children'>;

const LampRegular = memo(
  forwardRef<SVGSVGElement, LampRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="lamp" {...props}>
      <path fillRule="evenodd" d="M13.15 2.25c1.42 0 2.71.8 3.35 2.07l3.08 6.17a2.25 2.25 0 0 1-2 3.26h-4.83v4.58c1.34.27 2.5 1.26 2.5 2.67 0 .41-.34.75-.75.75h-5a.75.75 0 0 1-.75-.75c0-1.4 1.16-2.4 2.5-2.67v-4.58H6.43a2.25 2.25 0 0 1-2.02-3.26L7.5 4.32a3.8 3.8 0 0 1 3.35-2.07zm-2.3 1.5c-.85 0-1.63.48-2 1.24l-3.1 6.17a.75.75 0 0 0 .68 1.09h11.14c.56 0 .92-.59.67-1.09L15.16 5a2.3 2.3 0 0 0-2.01-1.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

LampRegular.displayName = 'LampRegular';

// Triple export pattern (lucide-react style)
export { LampRegular, LampRegular as LampRegularIcon, LampRegular as SiLampRegular };
export default LampRegular;
export type { LampRegularProps };
