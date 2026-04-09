import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreSquareVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreSquareVFillDuotone = memo(
  forwardRef<SVGSVGElement, MoreSquareVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-square-v-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36a6 6 0 0 1-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zm-.5 12a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.75m0-4a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74m0-4a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74" clipRule="evenodd" opacity={.4} />
        <path d="M12 9.38a1.37 1.37 0 1 1 0-2.75 1.37 1.37 0 0 1 0 2.75M12 13.38a1.37 1.37 0 1 1 0-2.75 1.37 1.37 0 0 1 0 2.74M12 17.38a1.37 1.37 0 1 1 0-2.75 1.37 1.37 0 0 1 0 2.74" />
    </IconBase>
  ))
);

MoreSquareVFillDuotone.displayName = 'MoreSquareVFillDuotone';

// Triple export pattern (lucide-react style)
export { MoreSquareVFillDuotone, MoreSquareVFillDuotone as MoreSquareVFillDuotoneIcon, MoreSquareVFillDuotone as SiMoreSquareVFillDuotone };
export default MoreSquareVFillDuotone;
export type { MoreSquareVFillDuotoneProps };
