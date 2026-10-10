import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DraftingCompassFillProps = Omit<IconBaseProps, 'children'>;

const DraftingCompassFill = memo(
  forwardRef<SVGSVGElement, DraftingCompassFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.13 15.88c.24-.42.78-.55 1.2-.3.41.24.55.78.3 1.2l-1.88 3.17c-.24.41-.78.55-1.2.3-.41-.24-.55-.78-.3-1.2zM12 2.63c1.86 0 3.37 1.5 3.37 3.37 0 .92-.36 1.75-.96 2.36l6.34 10.7c.25.4.11.95-.3 1.2-.42.24-.96.1-1.2-.31l-2.99-5.04c-1.29.62-2.74.96-4.26.96-3.82 0-7.14-2.17-8.78-5.34-.22-.43-.05-.96.38-1.18s.96-.05 1.18.38c1.35 2.61 4.08 4.4 7.22 4.4 1.2 0 2.34-.27 3.36-.73l-2.45-4.15q-.45.13-.91.13t-.9-.13l-1.4 2.36c-.25.41-.79.55-1.2.3-.42-.24-.56-.78-.31-1.2l1.4-2.35c-.6-.61-.97-1.44-.97-2.36 0-1.86 1.52-3.37 3.38-3.37" />
    </IconBase>
  ))
);

DraftingCompassFill.displayName = 'DraftingCompassFill';

// Triple export pattern
export { DraftingCompassFill, DraftingCompassFill as DraftingCompassFillIcon, DraftingCompassFill as SiDraftingCompassFill };
export default DraftingCompassFill;
export type { DraftingCompassFillProps };
