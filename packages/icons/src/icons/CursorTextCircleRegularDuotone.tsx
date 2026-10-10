import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorTextCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CursorTextCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M10 6.75c.79 0 1.5.33 2 .87.5-.54 1.21-.87 2-.87h.5c.41 0 .75.34.75.75s-.34.75-.75.75H14c-.69 0-1.25.56-1.25 1.25v5c0 .69.56 1.25 1.25 1.25h.5c.41 0 .75.34.75.75s-.34.75-.75.75H14c-.79 0-1.5-.33-2-.87-.5.54-1.21.87-2 .87h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5c.69 0 1.25-.56 1.25-1.25v-5c0-.69-.56-1.25-1.25-1.25h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

CursorTextCircleRegularDuotone.displayName = 'CursorTextCircleRegularDuotone';

// Triple export pattern
export { CursorTextCircleRegularDuotone, CursorTextCircleRegularDuotone as CursorTextCircleRegularDuotoneIcon, CursorTextCircleRegularDuotone as SiCursorTextCircleRegularDuotone };
export default CursorTextCircleRegularDuotone;
export type { CursorTextCircleRegularDuotoneProps };
