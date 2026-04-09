import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorTextCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CursorTextCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-text-circle-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path d="M10 6.75c.79 0 1.5.33 2 .87.5-.54 1.21-.87 2-.87h.5a.75.75 0 0 1 0 1.5H14c-.69 0-1.25.56-1.25 1.25v5c0 .69.56 1.25 1.25 1.25h.5a.75.75 0 0 1 0 1.5H14c-.79 0-1.5-.33-2-.87-.5.54-1.21.87-2 .87h-.5a.75.75 0 0 1 0-1.5h.5c.69 0 1.25-.56 1.25-1.25v-5c0-.69-.56-1.25-1.25-1.25h-.5a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

CursorTextCircleRegularDuotone.displayName = 'CursorTextCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { CursorTextCircleRegularDuotone, CursorTextCircleRegularDuotone as CursorTextCircleRegularDuotoneIcon, CursorTextCircleRegularDuotone as SiCursorTextCircleRegularDuotone };
export default CursorTextCircleRegularDuotone;
export type { CursorTextCircleRegularDuotoneProps };
