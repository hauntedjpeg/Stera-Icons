import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HardDriveBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HardDriveBoldDuotone = memo(
  forwardRef<SVGSVGElement, HardDriveBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.65 3.5c1.22 0 2.33.75 2.78 1.89l2.49 6.21c-.16-.35-.5-.6-.92-.6h-1.48l-1.95-4.87c-.15-.38-.52-.63-.92-.63h-9.3c-.4 0-.77.25-.92.63L4.48 11H3c-.41 0-.77.25-.92.6L4.57 5.4C5.02 4.25 6.13 3.5 7.35 3.5z" opacity={.4} />
        <path d="M6.5 14.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M10 14.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1" />
        <path fillRule="evenodd" d="M21 11c.55 0 1 .45 1 1v2.7q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q2 15.93 2 14.7V12c0-.55.45-1 1-1zM4 14.7c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V13H4z" clipRule="evenodd" />
    </IconBase>
  ))
);

HardDriveBoldDuotone.displayName = 'HardDriveBoldDuotone';

// Triple export pattern
export { HardDriveBoldDuotone, HardDriveBoldDuotone as HardDriveBoldDuotoneIcon, HardDriveBoldDuotone as SiHardDriveBoldDuotone };
export default HardDriveBoldDuotone;
export type { HardDriveBoldDuotoneProps };
