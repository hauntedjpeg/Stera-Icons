import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlusCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, PlusCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 5c-.48 0-.87.39-.87.87v3.12H8a.88.88 0 0 0 0 1.75h3.13V16a.87.87 0 1 0 1.75 0v-3.13H16a.87.87 0 1 0 0-1.75h-3.12V8c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 7.13c.49 0 .88.39.88.87v3.12H16a.88.88 0 0 1 0 1.75h-3.12V16a.88.88 0 0 1-1.75 0v-3.13H8a.87.87 0 1 1 0-1.75h3.13V8c0-.48.4-.87.87-.87" />
    </IconBase>
  ))
);

PlusCircleFillDuotone.displayName = 'PlusCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { PlusCircleFillDuotone, PlusCircleFillDuotone as PlusCircleFillDuotoneIcon, PlusCircleFillDuotone as SiPlusCircleFillDuotone };
export default PlusCircleFillDuotone;
export type { PlusCircleFillDuotoneProps };
