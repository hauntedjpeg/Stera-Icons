import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorPointerBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorPointerBoldDuotone = memo(
  forwardRef<SVGSVGElement, CursorPointerBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.83 14.82C6.32 17.77 8.87 20 11.94 20c3.32 0 6.03-2.6 6.2-5.88v-.32c0 .55.45 1 1 1 .56 0 1-.45 1-1 0 4.53-3.67 8.2-8.2 8.2-4.02 0-7.37-2.9-8.06-6.73l.03.09c.2.51.78.76 1.3.56.45-.17.7-.64.62-1.1" opacity={.4} />
        <path d="M10.14 2c1.55 0 2.8 1.25 2.8 2.8v1.82q.4-.12.8-.12c.96 0 1.8.48 2.31 1.22q.59-.31 1.3-.32c1.54 0 2.8 1.25 2.8 2.8v3.6c0 .55-.45 1-1 1-.56 0-1-.45-1-1v-3.6c0-.44-.37-.8-.8-.8-.45 0-.8.36-.8.8v1.35c0 .55-.45 1-1 1-.56 0-1-.45-1-1V9.3c0-.44-.37-.8-.8-.8-.42 0-.76.31-.8.72v1.88c0 .55-.45 1-1 1-.56 0-1-.45-1-1V4.8c0-.44-.36-.8-.8-.8s-.8.36-.8.8v8.1c0 .45-.3.85-.74.96-.44.12-.9-.06-1.13-.45L6 10.89q-.21-.34-.57-.4-.27-.04-.53.1c-.38.22-.51.71-.3 1.1l.07.13 1.1 2.8c.2.52-.05 1.1-.56 1.3-.52.2-1.1-.05-1.3-.56l-1.08-2.77c-.7-1.33-.24-2.97 1.07-3.73.58-.33 1.24-.44 1.85-.34.6.1 1.16.4 1.6.85V4.8c0-1.55 1.25-2.8 2.8-2.8" />
    </IconBase>
  ))
);

CursorPointerBoldDuotone.displayName = 'CursorPointerBoldDuotone';

// Triple export pattern
export { CursorPointerBoldDuotone, CursorPointerBoldDuotone as CursorPointerBoldDuotoneIcon, CursorPointerBoldDuotone as SiCursorPointerBoldDuotone };
export default CursorPointerBoldDuotone;
export type { CursorPointerBoldDuotoneProps };
