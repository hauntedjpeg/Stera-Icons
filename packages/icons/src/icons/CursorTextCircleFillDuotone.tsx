import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorTextCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorTextCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m-2.5 4.5a.88.88 0 0 0 0 1.75h.5c.62 0 1.13.5 1.13 1.12v5c0 .62-.5 1.13-1.13 1.13h-.5a.88.88 0 0 0 0 1.74h.5c.78 0 1.48-.3 2-.8.52.5 1.22.8 2 .8h.5a.88.88 0 0 0 0-1.75H14c-.62 0-1.12-.5-1.12-1.12v-5c0-.62.5-1.12 1.12-1.12h.5a.88.88 0 0 0 0-1.76H14c-.78 0-1.48.31-2 .82a2.9 2.9 0 0 0-2-.82z" clipRule="evenodd" opacity={.4} />
        <path d="M10 6.63c.78 0 1.48.3 2 .8.52-.5 1.22-.8 2-.8h.5a.88.88 0 0 1 0 1.75H14c-.62 0-1.12.5-1.12 1.12v5c0 .62.5 1.13 1.12 1.13h.5a.88.88 0 0 1 0 1.74H14c-.78 0-1.48-.3-2-.8-.52.5-1.22.8-2 .8h-.5a.88.88 0 0 1 0-1.75h.5c.62 0 1.13-.5 1.13-1.12v-5c0-.62-.5-1.12-1.13-1.12h-.5a.88.88 0 0 1 0-1.76z" />
    </IconBase>
  ))
);

CursorTextCircleFillDuotone.displayName = 'CursorTextCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { CursorTextCircleFillDuotone, CursorTextCircleFillDuotone as CursorTextCircleFillDuotoneIcon, CursorTextCircleFillDuotone as SiCursorTextCircleFillDuotone };
export default CursorTextCircleFillDuotone;
export type { CursorTextCircleFillDuotoneProps };
