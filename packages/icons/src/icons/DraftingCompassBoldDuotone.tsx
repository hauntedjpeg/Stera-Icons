import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DraftingCompassBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DraftingCompassBoldDuotone = memo(
  forwardRef<SVGSVGElement, DraftingCompassBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.02 15.82c.28-.48.9-.64 1.37-.36s.63.9.35 1.38L4.86 20c-.28.47-.9.63-1.37.35s-.63-.9-.35-1.37zM9.43 8.37q.35.38.78.64t.94.38L9.8 11.67c-.28.48-.9.63-1.37.35s-.63-.9-.35-1.37z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.5c1.93 0 3.5 1.57 3.5 3.5 0 .92-.36 1.75-.93 2.37l2.87 4.85v.01l.01.01 3.41 5.75c.28.48.13 1.09-.35 1.37s-1.09.12-1.37-.35l-2.93-4.94q-1.93.92-4.21.93c-3.87 0-7.23-2.2-8.89-5.41-.25-.5-.06-1.1.43-1.35.5-.25 1.1-.06 1.35.43C6.22 12.24 8.9 14 12 14q1.7-.02 3.19-.66l-2.34-3.95q-.41.1-.85.11-.99-.01-1.78-.49C9.19 8.41 8.5 7.28 8.5 6c0-1.93 1.57-3.5 3.5-3.5m0 2c-.83 0-1.5.67-1.5 1.5 0 .55.3 1.03.74 1.3q.34.19.76.2.43-.01.76-.2c.45-.27.74-.75.74-1.3 0-.83-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

DraftingCompassBoldDuotone.displayName = 'DraftingCompassBoldDuotone';

// Triple export pattern
export { DraftingCompassBoldDuotone, DraftingCompassBoldDuotone as DraftingCompassBoldDuotoneIcon, DraftingCompassBoldDuotone as SiDraftingCompassBoldDuotone };
export default DraftingCompassBoldDuotone;
export type { DraftingCompassBoldDuotoneProps };
