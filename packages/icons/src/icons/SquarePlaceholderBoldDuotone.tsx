import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquarePlaceholderBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquarePlaceholderBoldDuotone = memo(
  forwardRef<SVGSVGElement, SquarePlaceholderBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.43 19.5h-.93l-1.91-.01-5.08-5.08-.01-1.91v-.93zM17.53 18.94l-.21.12q-.15.09-.33.14c-.38.13-.87.21-1.61.26h-.16L4.54 8.78v-.16c.05-.74.13-1.23.26-1.61q.06-.18.14-.33l.11-.21zM19.46 15.22v.16c-.05.74-.13 1.23-.26 1.61q-.05.18-.14.33l-.12.21L6.47 5.05l.21-.11q.15-.08.33-.14c.38-.13.87-.21 1.61-.26h.16zM12.5 4.5h1.9l5.09 5.1.01 1.9v.93L11.57 4.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M12.5 2.5q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58 1.13.58 2.05 1.5 2.63 2.63.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v1q.01 1.78-.05 3-.04 1.19-.36 2.15-.1.3-.24.57c-.58 1.13-1.5 2.05-2.63 2.63q-.27.14-.57.24-.95.31-2.16.36-1.2.06-2.99.05h-1q-2.05.02-3.37-.07c-.9-.07-1.65-.23-2.35-.58-1.13-.58-2.05-1.5-2.63-2.63-.35-.7-.5-1.46-.58-2.35q-.09-1.32-.07-3.37v-1q-.01-1.78.05-3 .05-1.19.36-2.15.1-.3.24-.57c.58-1.13 1.5-2.05 2.63-2.63q.27-.14.57-.24.95-.32 2.16-.36 1.2-.06 2.99-.05zm-1 2c-1.22 0-2.14 0-2.88.04-.74.05-1.23.13-1.61.26q-.18.05-.33.14c-.75.38-1.36 1-1.74 1.74q-.08.15-.14.33c-.13.38-.21.87-.26 1.61-.04.74-.04 1.66-.04 2.88v1c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62.38.75 1 1.36 1.74 1.74.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06h1c1.22 0 2.14 0 2.88-.04.74-.05 1.23-.13 1.61-.26q.18-.05.33-.14c.75-.38 1.36-1 1.74-1.74q.09-.15.14-.33c.13-.38.21-.87.26-1.61.04-.74.04-1.66.04-2.88v-1c0-1.42 0-2.42-.06-3.2-.07-.77-.19-1.25-.38-1.62-.38-.75-1-1.36-1.74-1.74-.37-.2-.85-.31-1.62-.38-.78-.06-1.78-.06-3.2-.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

SquarePlaceholderBoldDuotone.displayName = 'SquarePlaceholderBoldDuotone';

// Triple export pattern
export { SquarePlaceholderBoldDuotone, SquarePlaceholderBoldDuotone as SquarePlaceholderBoldDuotoneIcon, SquarePlaceholderBoldDuotone as SiSquarePlaceholderBoldDuotone };
export default SquarePlaceholderBoldDuotone;
export type { SquarePlaceholderBoldDuotoneProps };
