import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquarePlaceholderBoldProps = Omit<IconBaseProps, 'children'>;

const SquarePlaceholderBold = memo(
  forwardRef<SVGSVGElement, SquarePlaceholderBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.5 2.5q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58 1.13.58 2.05 1.5 2.63 2.63.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v1q.01 1.78-.05 3-.04 1.19-.36 2.15-.1.3-.24.57c-.58 1.13-1.5 2.05-2.63 2.63q-.27.14-.57.24-.95.31-2.16.36-1.2.06-2.99.05h-1q-2.05.02-3.37-.07c-.9-.07-1.65-.23-2.35-.58-1.13-.58-2.05-1.5-2.63-2.63-.35-.7-.5-1.46-.58-2.35q-.09-1.32-.07-3.37v-1q-.01-1.78.05-3 .05-1.19.36-2.15.1-.3.24-.57c.58-1.13 1.5-2.05 2.63-2.63q.27-.14.57-.24.95-.32 2.16-.36 1.2-.06 2.99-.05zM4.54 8.78c-.04.71-.04 1.58-.04 2.72v.07l7.93 7.93h.07c1.14 0 2 0 2.72-.04zM4.5 14.4q0 .74.05 1.3c.07.76.19 1.24.38 1.6.38.76 1 1.37 1.74 1.75.37.2.85.31 1.62.38q.55.04 1.29.05zm1.96-9.36q-.89.54-1.42 1.42l12.48 12.47q.88-.52 1.41-1.41zm5.03-.55c-1.14 0-2.01 0-2.72.04l10.68 10.68c.04-.71.04-1.58.04-2.72v-.07L11.57 4.5zm7.99 5.1q0-.75-.05-1.3c-.07-.77-.19-1.25-.38-1.62-.38-.75-1-1.36-1.74-1.74-.37-.2-.85-.31-1.62-.38q-.55-.04-1.3-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

SquarePlaceholderBold.displayName = 'SquarePlaceholderBold';

// Triple export pattern
export { SquarePlaceholderBold, SquarePlaceholderBold as SquarePlaceholderBoldIcon, SquarePlaceholderBold as SiSquarePlaceholderBold };
export default SquarePlaceholderBold;
export type { SquarePlaceholderBoldProps };
