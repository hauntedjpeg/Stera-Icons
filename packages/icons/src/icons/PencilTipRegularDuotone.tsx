import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilTipRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PencilTipRegularDuotone = memo(
  forwardRef<SVGSVGElement, PencilTipRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.75 12.71V22c0 .41-.34.75-.75.75s-.75-.34-.75-.75V11.96zM19.75 12.03V22c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-9.29l1.5-.75zM8.38 5.43l.14.15.44.36q.29.24.6.42l-3.34 4.29q-.16.22-.28.48l-1.35-.67.1-.2q.15-.27.35-.53zM15.62 5.43l3.34 4.3q.27.34.45.73l-1.35.67q-.11-.26-.28-.48l-3.34-4.29q.32-.18.6-.42l.44-.36z" opacity={0.4} />
        <path fillRule="evenodd" d="m16.56 11.88 2.85-1.42q.32.71.34 1.5l-2.52 1.26c-.77.4-1.69.4-2.46 0l-2.02-1V22c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-9.79l-2.02 1.01c-.77.4-1.69.4-2.46 0l-2.52-1.26q.02-.79.34-1.5l2.85 1.42c.35.18.77.18 1.12 0l2.21-1.1c.78-.39 1.69-.39 2.46 0l2.21 1.1c.35.18.77.18 1.12 0M8.38 5.43l.14.15.44.36c1.76 1.47 4.32 1.47 6.08 0l.44-.36.14-.15-3.03-3.9q-.23-.27-.59-.28-.32 0-.53.22l-.06.07z" clipRule="evenodd" />
    </IconBase>
  ))
);

PencilTipRegularDuotone.displayName = 'PencilTipRegularDuotone';

// Triple export pattern
export { PencilTipRegularDuotone, PencilTipRegularDuotone as PencilTipRegularDuotoneIcon, PencilTipRegularDuotone as SiPencilTipRegularDuotone };
export default PencilTipRegularDuotone;
export type { PencilTipRegularDuotoneProps };
