import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusCircleFillProps = Omit<IconBaseProps, 'children'>;

const PlusCircleFill = memo(
  forwardRef<SVGSVGElement, PlusCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 5c-.48 0-.87.39-.87.87v3.12H8a.88.88 0 0 0 0 1.75h3.13V16a.87.87 0 1 0 1.75 0v-3.13H16a.87.87 0 1 0 0-1.75h-3.12V8c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

PlusCircleFill.displayName = 'PlusCircleFill';

// Triple export pattern (lucide-react style)
export { PlusCircleFill, PlusCircleFill as PlusCircleFillIcon, PlusCircleFill as SiPlusCircleFill };
export default PlusCircleFill;
export type { PlusCircleFillProps };
