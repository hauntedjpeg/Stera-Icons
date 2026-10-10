import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DraftingCompassFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DraftingCompassFillDuotone = memo(
  forwardRef<SVGSVGElement, DraftingCompassFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.13 15.88c.25-.42.78-.55 1.2-.3.41.24.55.78.3 1.2l-1.88 3.17c-.24.41-.78.55-1.2.3-.41-.24-.55-.78-.3-1.2zM9.59 8.36q.3.31.69.54t.81.35l-1.4 2.36c-.24.41-.78.55-1.2.3-.41-.24-.55-.78-.3-1.2zM12 4.38c.9 0 1.62.72 1.62 1.62 0 .6-.31 1.11-.8 1.4q-.36.21-.82.22-.46 0-.83-.22c-.48-.29-.8-.8-.8-1.4 0-.9.73-1.62 1.63-1.62" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.63c1.86 0 3.38 1.5 3.38 3.37 0 .92-.37 1.75-.97 2.36l6.34 10.7c.25.4.11.95-.3 1.2-.42.24-.96.1-1.2-.31l-2.99-5.04q-1.95.94-4.26.96c-3.82 0-7.14-2.17-8.78-5.34-.22-.43-.05-.96.38-1.18s.96-.05 1.18.38c1.35 2.61 4.08 4.4 7.22 4.4 1.2 0 2.34-.27 3.37-.73L12.9 9.25q-.44.12-.91.13-.96-.02-1.72-.48C9.29 8.32 8.63 7.24 8.63 6c0-1.86 1.5-3.37 3.37-3.37m0 1.75c-.9 0-1.62.72-1.62 1.62 0 .6.31 1.11.8 1.4q.36.21.82.22.46 0 .83-.22c.48-.29.8-.8.8-1.4 0-.9-.73-1.62-1.63-1.62" clipRule="evenodd" />
    </IconBase>
  ))
);

DraftingCompassFillDuotone.displayName = 'DraftingCompassFillDuotone';

// Triple export pattern
export { DraftingCompassFillDuotone, DraftingCompassFillDuotone as DraftingCompassFillDuotoneIcon, DraftingCompassFillDuotone as SiDraftingCompassFillDuotone };
export default DraftingCompassFillDuotone;
export type { DraftingCompassFillDuotoneProps };
