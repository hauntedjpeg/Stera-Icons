import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KunaiBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const KunaiBoldDuotone = memo(
  forwardRef<SVGSVGElement, KunaiBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="m11.74 9.56 2.7 2.7.03.02-.58 3.48c-.05.3-.24.57-.51.72l-9.9 5.4c-.4.21-.87.14-1.19-.17s-.38-.8-.17-1.19l5.4-9.9.06-.1q.25-.33.66-.4l3.48-.59zM9.04 12l-3.53 6.48 6.48-3.53.6-3.54z" clipRule="evenodd" opacity={0.4} />
        <path d="M16.64 5.94c.29.63.79 1.13 1.42 1.41L15.2 10.2 13.8 8.79z" opacity={0.4} />
        <path d="M11.74 8.14c.4-.39 1.03-.39 1.42 0l2.7 2.7c.39.4.39 1.03 0 1.42-.4.39-1.03.39-1.42 0l-2.7-2.7c-.39-.4-.39-1.03 0-1.42" />
        <path fillRule="evenodd" d="M19.2 2C20.75 2 22 3.25 22 4.8s-1.25 2.8-2.8 2.8-2.8-1.25-2.8-2.8S17.65 2 19.2 2m0 2c-.44 0-.8.36-.8.8s.36.8.8.8.8-.36.8-.8-.36-.8-.8-.8" clipRule="evenodd" />
    </IconBase>
  ))
);

KunaiBoldDuotone.displayName = 'KunaiBoldDuotone';

// Triple export pattern
export { KunaiBoldDuotone, KunaiBoldDuotone as KunaiBoldDuotoneIcon, KunaiBoldDuotone as SiKunaiBoldDuotone };
export default KunaiBoldDuotone;
export type { KunaiBoldDuotoneProps };
