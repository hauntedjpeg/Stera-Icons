import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, MoreSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36a6 6 0 0 1-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zm-4.5 8a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74m4 0a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74m4 0a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74" clipRule="evenodd" opacity={.4} />
        <path d="M9.38 12a1.37 1.37 0 1 1-2.75 0 1.37 1.37 0 0 1 2.75 0M13.38 12a1.37 1.37 0 1 1-2.75 0 1.37 1.37 0 0 1 2.74 0M17.38 12a1.37 1.37 0 1 1-2.75 0 1.37 1.37 0 0 1 2.74 0" />
    </IconBase>
  ))
);

MoreSquareFillDuotone.displayName = 'MoreSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { MoreSquareFillDuotone, MoreSquareFillDuotone as MoreSquareFillDuotoneIcon, MoreSquareFillDuotone as SiMoreSquareFillDuotone };
export default MoreSquareFillDuotone;
export type { MoreSquareFillDuotoneProps };
