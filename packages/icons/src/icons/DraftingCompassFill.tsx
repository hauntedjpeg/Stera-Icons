import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DraftingCompassFillProps = Omit<IconBaseProps, 'children'>;

const DraftingCompassFill = memo(
  forwardRef<SVGSVGElement, DraftingCompassFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.13 15.88a.87.87 0 1 1 1.5.9l-1.88 3.17a.88.88 0 0 1-1.5-.9zM12 2.63a3.37 3.37 0 0 1 2.41 5.73l6.34 10.7a.88.88 0 0 1-1.5.89l-2.99-5.04a9.88 9.88 0 0 1-13.04-4.38.88.88 0 0 1 1.56-.8 8.13 8.13 0 0 0 10.58 3.67l-2.45-4.15a3.4 3.4 0 0 1-1.82 0l-1.4 2.36a.88.88 0 0 1-1.5-.9l1.4-2.35A3.36 3.36 0 0 1 12 2.63" />
    </IconBase>
  ))
);

DraftingCompassFill.displayName = 'DraftingCompassFill';

// Triple export pattern (lucide-react style)
export { DraftingCompassFill, DraftingCompassFill as DraftingCompassFillIcon, DraftingCompassFill as SiDraftingCompassFill };
export default DraftingCompassFill;
export type { DraftingCompassFillProps };
