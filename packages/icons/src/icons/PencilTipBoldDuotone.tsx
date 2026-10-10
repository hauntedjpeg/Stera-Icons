import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilTipBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PencilTipBoldDuotone = memo(
  forwardRef<SVGSVGElement, PencilTipBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m4 12.12 2 1V22c0 .55-.45 1-1 1s-1-.45-1-1zM20 22c0 .55-.45 1-1 1s-1-.45-1-1v-8.88l2-1zM8.02 5.49l.74.62q.4.33.87.57l-3.2 4.12-.16.22-1.79-.9-.05.1q.18-.33.41-.65zM19.16 9.57q.24.31.4.65l-.04-.1-1.8.9-.14-.22-3.2-4.12q.45-.24.86-.57l.74-.62z" opacity={0.4} />
        <path d="M19.52 10.13q.47.88.48 1.9v.09l-2 1-.66.33c-.84.42-1.84.42-2.68 0L13 12.62V22c0 .55-.45 1-1 1s-1-.45-1-1v-9.38l-1.66.83c-.84.42-1.84.42-2.68 0L4 12.12v-.09q0-1.02.48-1.9l3.07 1.53c.28.14.62.14.9 0l2.2-1.1c.85-.43 1.85-.43 2.7 0l2.2 1.1c.28.14.62.14.9 0zM12 1c.3 0 .6.14.79.39l3.19 4.1-.74.62c-1.86 1.54-4.61 1.55-6.48 0l-.74-.62 3.2-4.1.07-.09q.29-.3.71-.3" />
    </IconBase>
  ))
);

PencilTipBoldDuotone.displayName = 'PencilTipBoldDuotone';

// Triple export pattern
export { PencilTipBoldDuotone, PencilTipBoldDuotone as PencilTipBoldDuotoneIcon, PencilTipBoldDuotone as SiPencilTipBoldDuotone };
export default PencilTipBoldDuotone;
export type { PencilTipBoldDuotoneProps };
