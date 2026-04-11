import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtSignFillProps = Omit<IconBaseProps, 'children'>;

const AtSignFill = memo(
  forwardRef<SVGSVGElement, AtSignFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75a10.25 10.25 0 0 1 10.2 11.27c-.27 2.7-1.99 4.5-4.1 4.49a3.5 3.5 0 0 1-3.02-1.77 4.85 4.85 0 1 1-.6-7.9 1.25 1.25 0 0 1 2.37.56v4.5c0 1.75.87 2.1 1.27 2.1.45.01 1.41-.42 1.6-2.22l.03-.78a7.75 7.75 0 1 0-5.17 7.31 1.25 1.25 0 0 1 .84 2.36A10.24 10.24 0 0 1 1.75 12C1.75 6.34 6.34 1.75 12 1.75m0 7.9a2.35 2.35 0 1 0 0 4.7 2.35 2.35 0 0 0 0-4.7" clipRule="evenodd" />
    </IconBase>
  ))
);

AtSignFill.displayName = 'AtSignFill';

// Triple export pattern (lucide-react style)
export { AtSignFill, AtSignFill as AtSignFillIcon, AtSignFill as SiAtSignFill };
export default AtSignFill;
export type { AtSignFillProps };
