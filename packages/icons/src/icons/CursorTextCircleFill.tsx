import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextCircleFillProps = Omit<IconBaseProps, 'children'>;

const CursorTextCircleFill = memo(
  forwardRef<SVGSVGElement, CursorTextCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m-2.5 4.5c-.48 0-.87.39-.87.87s.39.87.87.88h.5c.62 0 1.13.5 1.13 1.12v5c0 .62-.5 1.13-1.13 1.13h-.5c-.48 0-.87.39-.87.87s.39.88.87.88h.5c.78 0 1.48-.32 2-.82.52.5 1.22.82 2 .82h.5c.48 0 .88-.4.88-.88s-.4-.87-.88-.87H14c-.62 0-1.12-.5-1.12-1.13v-5c0-.62.5-1.12 1.12-1.12h.5c.48 0 .88-.4.88-.88s-.4-.87-.88-.87H14c-.78 0-1.48.3-2 .8-.52-.5-1.22-.8-2-.8z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorTextCircleFill.displayName = 'CursorTextCircleFill';

// Triple export pattern
export { CursorTextCircleFill, CursorTextCircleFill as CursorTextCircleFillIcon, CursorTextCircleFill as SiCursorTextCircleFill };
export default CursorTextCircleFill;
export type { CursorTextCircleFillProps };
