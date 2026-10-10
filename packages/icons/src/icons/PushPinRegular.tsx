import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PushPinRegularProps = Omit<IconBaseProps, 'children'>;

const PushPinRegular = memo(
  forwardRef<SVGSVGElement, PushPinRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.76 2.25c1.1 0 1.99.89 1.99 1.99 0 .75-.42 1.44-1.1 1.77l-.62.32q-.27.14-.28.44v3.56q0 .26.22.42L18.86 12c.56.38.89 1 .89 1.67v1.08c0 1.1-.9 2-2 2h-5V22c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.25h-5c-1.1 0-2-.9-2-2v-1.08c0-.67.33-1.3.9-1.67l1.88-1.25q.21-.16.22-.42V6.77q0-.3-.28-.44L6.35 6c-.68-.33-1.1-1.02-1.1-1.77 0-1.1.89-1.99 1.99-1.99zm-9.52 1.5c-.27 0-.49.22-.49.49q0 .29.27.43l.62.31c.68.34 1.11 1.03 1.11 1.8v3.55c0 .67-.33 1.3-.9 1.67l-1.88 1.25q-.21.16-.22.42v1.08c0 .28.22.5.5.5h11.5c.28 0 .5-.22.5-.5v-1.08q0-.26-.22-.42L16.14 12c-.56-.38-.89-1-.89-1.67V6.77c0-.76.43-1.45 1.1-1.79l.63-.3q.26-.16.27-.44c0-.27-.22-.49-.49-.49z" clipRule="evenodd" />
    </IconBase>
  ))
);

PushPinRegular.displayName = 'PushPinRegular';

// Triple export pattern
export { PushPinRegular, PushPinRegular as PushPinRegularIcon, PushPinRegular as SiPushPinRegular };
export default PushPinRegular;
export type { PushPinRegularProps };
