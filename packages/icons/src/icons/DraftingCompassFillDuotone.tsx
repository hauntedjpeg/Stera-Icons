import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DraftingCompassFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DraftingCompassFillDuotone = memo(
  forwardRef<SVGSVGElement, DraftingCompassFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.13 15.88a.88.88 0 0 1 1.5.9l-1.88 3.17a.88.88 0 0 1-1.5-.9zM9.59 8.36a3.4 3.4 0 0 0 1.5.9L9.7 11.6a.88.88 0 0 1-1.5-.9zM12 4.38a1.63 1.63 0 1 1 0 3.25 1.63 1.63 0 0 1 0-3.25" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.63a3.38 3.38 0 0 1 2.41 5.73l6.34 10.7a.88.88 0 0 1-1.5.89l-2.99-5.04q-1.95.94-4.26.96a9.9 9.9 0 0 1-8.78-5.34.88.88 0 0 1 1.56-.8 8.1 8.1 0 0 0 10.59 3.67L12.9 9.25A3.38 3.38 0 1 1 12 2.63m0 1.75a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24" clipRule="evenodd" />
    </IconBase>
  ))
);

DraftingCompassFillDuotone.displayName = 'DraftingCompassFillDuotone';

// Triple export pattern (lucide-react style)
export { DraftingCompassFillDuotone, DraftingCompassFillDuotone as DraftingCompassFillDuotoneIcon, DraftingCompassFillDuotone as SiDraftingCompassFillDuotone };
export default DraftingCompassFillDuotone;
export type { DraftingCompassFillDuotoneProps };
