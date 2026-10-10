import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CopyFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CopyFillDuotone = memo(
  forwardRef<SVGSVGElement, CopyFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.2 2.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.04.6.04 1.38H12.8q-1.24-.01-2.04.04c-.56.04-1.05.14-1.52.38q-1.11.57-1.7 1.7-.33.68-.37 1.5-.06.82-.04 2.05v4.07q-.79.01-1.37-.04-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.82-.04-2.05V7.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04z" opacity={.4} />
        <path d="M16.2 7.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.82.05 2.05v3.4q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.81.06-2.05.05h-3.4q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05v-3.4q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.82-.06 2.05-.04z" />
    </IconBase>
  ))
);

CopyFillDuotone.displayName = 'CopyFillDuotone';

// Triple export pattern
export { CopyFillDuotone, CopyFillDuotone as CopyFillDuotoneIcon, CopyFillDuotone as SiCopyFillDuotone };
export default CopyFillDuotone;
export type { CopyFillDuotoneProps };
