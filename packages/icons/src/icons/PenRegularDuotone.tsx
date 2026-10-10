import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PenRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PenRegularDuotone = memo(
  forwardRef<SVGSVGElement, PenRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.25 1.87c1 0 2.03.35 2.78 1.1s1.1 1.78 1.1 2.78-.35 2.03-1.1 2.78l-2.53 2.53-5.56-5.56 2.53-2.53c.75-.75 1.78-1.1 2.78-1.1m0 1.5c-.67 0-1.3.24-1.72.66L15.06 5.5l3.44 3.44 1.47-1.47c.42-.42.66-1.05.66-1.72s-.24-1.3-.66-1.72-1.05-.66-1.72-.66" clipRule="evenodd" opacity={.4} />
        <path d="M12.94 5.5 14 6.56l-9.8 9.8-.77 4.2 4.2-.76 9.8-9.8 1.07 1.06-9.97 9.97q-.16.16-.4.2l-5.5 1c-.24.05-.49-.03-.66-.2s-.25-.42-.2-.66l1-5.5.02-.12q.06-.15.18-.28z" />
    </IconBase>
  ))
);

PenRegularDuotone.displayName = 'PenRegularDuotone';

// Triple export pattern
export { PenRegularDuotone, PenRegularDuotone as PenRegularDuotoneIcon, PenRegularDuotone as SiPenRegularDuotone };
export default PenRegularDuotone;
export type { PenRegularDuotoneProps };
