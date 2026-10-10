import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WrenchRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const WrenchRegularDuotone = memo(
  forwardRef<SVGSVGElement, WrenchRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m7.84 11.35.16.47c.14.39.57.58.96.44q.22-.08.34-.26l-.07.09-4.93 4.93c-.74.74-.74 1.94 0 2.68.74.73 1.94.74 2.68 0l4.93-4.93.08-.07q-.16.13-.25.34c-.14.39.05.82.44.96q.23.08.47.15l-4.6 4.6c-1.33 1.33-3.48 1.33-4.8 0-1.33-1.32-1.33-3.47 0-4.8z" opacity={.4} />
        <path d="M9.63 4.33c1.8-1.8 4.31-2.43 6.61-1.9 1.04.23 1.2 1.45.57 2.08l-2.83 2.83.52 2.16 2.16.52 2.83-2.83.13-.11c.6-.46 1.59-.32 1.9.5l.05.18.09.43c.35 2.18-.3 4.5-1.99 6.17-2.02 2.03-4.97 2.57-7.49 1.64-.39-.14-.58-.58-.44-.96.14-.4.57-.59.96-.45 2 .74 4.32.31 5.91-1.29 1.28-1.28 1.81-3.03 1.59-4.7l-2.77 2.77q-.3.29-.7.2l-3.03-.71c-.28-.07-.5-.28-.56-.56l-.71-3.03q-.09-.4.2-.7L15.4 3.8c-1.67-.22-3.42.3-4.7 1.59-1.6 1.6-2.03 3.92-1.3 5.9.15.4-.05.83-.44.97s-.82-.05-.96-.44c-.93-2.52-.4-5.47 1.63-7.5" />
    </IconBase>
  ))
);

WrenchRegularDuotone.displayName = 'WrenchRegularDuotone';

// Triple export pattern
export { WrenchRegularDuotone, WrenchRegularDuotone as WrenchRegularDuotoneIcon, WrenchRegularDuotone as SiWrenchRegularDuotone };
export default WrenchRegularDuotone;
export type { WrenchRegularDuotoneProps };
