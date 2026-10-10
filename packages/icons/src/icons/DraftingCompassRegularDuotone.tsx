import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DraftingCompassRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DraftingCompassRegularDuotone = memo(
  forwardRef<SVGSVGElement, DraftingCompassRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.24 15.94c.2-.35.67-.47 1.02-.26.36.21.48.67.27 1.03l-1.88 3.17c-.22.36-.68.48-1.03.27-.36-.22-.48-.68-.27-1.03zM9.74 8.34q.28.26.6.46.33.19.7.3l-1.45 2.44c-.21.36-.68.48-1.03.27-.36-.21-.47-.67-.26-1.03z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.75c1.8 0 3.25 1.46 3.25 3.25 0 .92-.38 1.75-1 2.34l6.4 10.78c.2.35.09.81-.27 1.03-.35.2-.81.09-1.03-.27l-3.04-5.13q-1.97.98-4.31 1c-3.77 0-7.05-2.14-8.67-5.28-.19-.37-.04-.82.33-1 .36-.2.82-.05 1 .31 1.38 2.66 4.15 4.47 7.34 4.47q1.92-.02 3.54-.8L12.97 9.1q-.46.15-.97.15-.91-.02-1.66-.45C9.4 8.23 8.75 7.2 8.75 6c0-1.8 1.46-3.25 3.25-3.25m0 1.5c-.97 0-1.75.78-1.75 1.75 0 .64.34 1.2.86 1.5q.4.25.89.25.5 0 .9-.24c.5-.31.85-.87.85-1.51 0-.97-.78-1.75-1.75-1.75" clipRule="evenodd" />
    </IconBase>
  ))
);

DraftingCompassRegularDuotone.displayName = 'DraftingCompassRegularDuotone';

// Triple export pattern
export { DraftingCompassRegularDuotone, DraftingCompassRegularDuotone as DraftingCompassRegularDuotoneIcon, DraftingCompassRegularDuotone as SiDraftingCompassRegularDuotone };
export default DraftingCompassRegularDuotone;
export type { DraftingCompassRegularDuotoneProps };
