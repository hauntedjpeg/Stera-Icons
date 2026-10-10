import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PushPinFillProps = Omit<IconBaseProps, 'children'>;

const PushPinFill = memo(
  forwardRef<SVGSVGElement, PushPinFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.97 2.26c1 .1 1.78.95 1.78 1.98 0 .75-.42 1.44-1.1 1.77l-.62.32q-.27.14-.28.44v3.56q0 .26.22.42L18.86 12c.56.38.89 1 .89 1.67v1.08c0 1.1-.9 2-2 2H13V22c0 .55-.45 1-1 1s-1-.45-1-1v-5.25H6.25c-1.1 0-2-.9-2-2v-1.08c0-.67.33-1.3.9-1.67l1.88-1.25q.21-.16.22-.42V6.77q0-.3-.28-.44L6.35 6c-.68-.33-1.1-1.02-1.1-1.77 0-1.1.89-1.99 1.99-1.99h9.52z" />
    </IconBase>
  ))
);

PushPinFill.displayName = 'PushPinFill';

// Triple export pattern
export { PushPinFill, PushPinFill as PushPinFillIcon, PushPinFill as SiPushPinFill };
export default PushPinFill;
export type { PushPinFillProps };
