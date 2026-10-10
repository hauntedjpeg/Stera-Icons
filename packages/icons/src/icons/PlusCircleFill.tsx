import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusCircleFillProps = Omit<IconBaseProps, 'children'>;

const PlusCircleFill = memo(
  forwardRef<SVGSVGElement, PlusCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 5c-.48 0-.87.39-.87.87v3.12H8c-.48 0-.87.4-.87.88s.39.87.87.87h3.13V16c0 .48.4.88.87.88.49 0 .88-.4.88-.88v-3.13H16c.48 0 .88-.4.88-.87 0-.49-.4-.88-.88-.88h-3.12V8c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

PlusCircleFill.displayName = 'PlusCircleFill';

// Triple export pattern
export { PlusCircleFill, PlusCircleFill as PlusCircleFillIcon, PlusCircleFill as SiPlusCircleFill };
export default PlusCircleFill;
export type { PlusCircleFillProps };
