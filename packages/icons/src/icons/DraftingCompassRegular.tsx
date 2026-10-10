import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DraftingCompassRegularProps = Omit<IconBaseProps, 'children'>;

const DraftingCompassRegular = memo(
  forwardRef<SVGSVGElement, DraftingCompassRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.24 15.94c.2-.35.67-.47 1.02-.26.36.21.48.67.27 1.03l-1.88 3.17c-.22.36-.68.48-1.03.27-.36-.22-.48-.68-.27-1.03z" />
        <path fillRule="evenodd" d="M12 2.75c1.8 0 3.25 1.46 3.25 3.25 0 .92-.38 1.75-1 2.34l6.4 10.78c.2.35.09.81-.27 1.03-.35.2-.81.09-1.03-.27l-3.04-5.13q-1.97.98-4.31 1c-3.77 0-7.05-2.14-8.67-5.28-.19-.37-.04-.82.33-1 .36-.2.82-.06 1 .31 1.38 2.66 4.15 4.47 7.34 4.47q1.92-.02 3.54-.8L12.97 9.1q-.46.15-.97.15-.5 0-.97-.15L9.6 11.54c-.21.36-.67.48-1.03.27s-.47-.67-.26-1.03l1.44-2.44c-.6-.6-.99-1.42-.99-2.34 0-1.8 1.46-3.25 3.25-3.25m0 1.5c-.97 0-1.75.78-1.75 1.75 0 .64.34 1.2.86 1.5q.4.25.89.25.5 0 .9-.24c.5-.31.85-.87.85-1.51 0-.97-.78-1.75-1.75-1.75" clipRule="evenodd" />
        <path d="M5.24 15.94c.2-.35.67-.47 1.02-.26.36.21.48.67.27 1.03l-1.89 3.17c-.2.36-.67.48-1.02.27-.36-.22-.48-.68-.27-1.03z" />
        <path fillRule="evenodd" d="M12 2.75c1.8 0 3.25 1.46 3.25 3.25 0 .92-.38 1.75-1 2.34l6.4 10.78c.2.35.09.81-.27 1.03-.35.2-.82.09-1.03-.27l-3.04-5.13q-1.97.98-4.31 1c-3.77 0-7.05-2.14-8.67-5.28-.19-.37-.04-.82.32-1 .37-.2.82-.06 1.02.31 1.37 2.66 4.14 4.47 7.33 4.47q1.92-.02 3.54-.8L12.97 9.1q-.46.15-.97.15-.5 0-.97-.15L9.6 11.54c-.22.36-.68.48-1.03.27-.36-.21-.48-.67-.26-1.03l1.44-2.44c-.6-.6-1-1.42-1-2.34 0-1.8 1.46-3.25 3.26-3.25m0 1.5c-.97 0-1.75.78-1.75 1.75 0 .64.34 1.2.86 1.5q.4.25.89.25.5 0 .9-.24c.5-.31.85-.87.85-1.51 0-.97-.78-1.75-1.75-1.75" clipRule="evenodd" />
    </IconBase>
  ))
);

DraftingCompassRegular.displayName = 'DraftingCompassRegular';

// Triple export pattern
export { DraftingCompassRegular, DraftingCompassRegular as DraftingCompassRegularIcon, DraftingCompassRegular as SiDraftingCompassRegular };
export default DraftingCompassRegular;
export type { DraftingCompassRegularProps };
