import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LampBoldProps = Omit<IconBaseProps, 'children'>;

const LampBold = memo(
  forwardRef<SVGSVGElement, LampBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="lamp-bold" {...props}>
      <path fillRule="evenodd" d="M13.15 2a4 4 0 0 1 3.57 2.21l3.09 6.17A2.5 2.5 0 0 1 17.57 14H13v4.13c1.34.35 2.5 1.38 2.5 2.87a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1c0-1.5 1.16-2.52 2.5-2.87V14H6.43a2.5 2.5 0 0 1-2.24-3.62l3.09-6.17A4 4 0 0 1 10.85 2zm-2.3 2a2 2 0 0 0-1.78 1.1l-3.09 6.18a.5.5 0 0 0 .45.72h11.14a.5.5 0 0 0 .45-.72L14.93 5.1A2 2 0 0 0 13.15 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

LampBold.displayName = 'LampBold';

// Triple export pattern (lucide-react style)
export { LampBold, LampBold as LampBoldIcon, LampBold as SiLampBold };
export default LampBold;
export type { LampBoldProps };
