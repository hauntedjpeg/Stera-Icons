import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AsteriskBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AsteriskBoldDuotone = memo(
  forwardRef<SVGSVGElement, AsteriskBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 13.72V21c0 .55-.45 1-1 1s-1-.45-1-1v-7.28l1-.57zM3.35 7c.27-.48.88-.65 1.36-.37L11 10.26v1.15L10 12 3.71 8.36c-.48-.27-.64-.89-.36-1.36M19.3 6.63c.48-.28 1.09-.11 1.36.37.28.48.11 1.09-.36 1.36L14 12l-1-.58v-1.15z" opacity={0.4} />
        <path d="M12 2c.55 0 1 .45 1 1v8.41l7.3 4.22c.48.28.64.89.37 1.37-.28.47-.89.64-1.37.36L12 13.15l-7.3 4.21c-.47.28-1.08.11-1.36-.36-.27-.48-.11-1.1.37-1.37L11 11.41V3c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

AsteriskBoldDuotone.displayName = 'AsteriskBoldDuotone';

// Triple export pattern
export { AsteriskBoldDuotone, AsteriskBoldDuotone as AsteriskBoldDuotoneIcon, AsteriskBoldDuotone as SiAsteriskBoldDuotone };
export default AsteriskBoldDuotone;
export type { AsteriskBoldDuotoneProps };
