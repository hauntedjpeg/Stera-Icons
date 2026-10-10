import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtSignFillProps = Omit<IconBaseProps, 'children'>;

const AtSignFill = memo(
  forwardRef<SVGSVGElement, AtSignFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25q0 .52-.05 1.02c-.27 2.7-1.99 4.5-4.1 4.49-1.27 0-2.35-.67-3.02-1.77-.84.7-1.9 1.11-3.08 1.11-2.68 0-4.85-2.17-4.85-4.85S9.32 7.15 12 7.15c.9 0 1.76.25 2.49.68.2-.4.62-.68 1.11-.68.69 0 1.25.56 1.25 1.25v4.5c0 1.75.87 2.1 1.27 2.1.45.01 1.41-.42 1.6-2.22l.03-.78c0-4.28-3.47-7.75-7.75-7.75S4.25 7.72 4.25 12s3.47 7.75 7.75 7.75q1.37-.01 2.58-.44c.65-.23 1.37.11 1.6.76s-.11 1.37-.76 1.6q-1.61.57-3.42.58C6.34 22.25 1.75 17.66 1.75 12S6.34 1.75 12 1.75m0 7.9c-1.3 0-2.35 1.05-2.35 2.35s1.05 2.35 2.35 2.35 2.35-1.05 2.35-2.35S13.3 9.65 12 9.65" clipRule="evenodd" />
    </IconBase>
  ))
);

AtSignFill.displayName = 'AtSignFill';

// Triple export pattern
export { AtSignFill, AtSignFill as AtSignFillIcon, AtSignFill as SiAtSignFill };
export default AtSignFill;
export type { AtSignFillProps };
