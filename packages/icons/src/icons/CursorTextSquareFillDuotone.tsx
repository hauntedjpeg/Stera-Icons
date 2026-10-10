import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorTextSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorTextSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36s-.22 1.63-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07s-1.63-.22-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56-.35-.68-.5-1.43-.57-2.31-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zm-3 4c-.48 0-.87.39-.87.87s.39.87.87.88h.5c.62 0 1.13.5 1.13 1.12v5c0 .62-.5 1.13-1.13 1.13h-.5c-.48 0-.87.39-.87.87s.39.88.87.88h.5c.78 0 1.48-.32 2-.82.52.5 1.22.82 2 .82h.5c.48 0 .88-.4.88-.88s-.4-.87-.88-.87H14c-.62 0-1.12-.5-1.12-1.13v-5c0-.62.5-1.12 1.12-1.12h.5c.48 0 .88-.4.88-.88s-.4-.87-.88-.87H14c-.78 0-1.48.3-2 .8-.52-.5-1.22-.8-2-.8z" clipRule="evenodd" opacity={.4} />
        <path d="M10 6.63c.78 0 1.48.3 2 .8.52-.5 1.22-.8 2-.8h.5c.48 0 .88.39.88.87s-.4.88-.88.88H14c-.62 0-1.12.5-1.12 1.12v5c0 .62.5 1.13 1.12 1.13h.5c.48 0 .88.39.88.87s-.4.88-.88.88H14c-.78 0-1.48-.32-2-.82-.52.5-1.22.82-2 .82h-.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h.5c.62 0 1.13-.5 1.13-1.13v-5c0-.62-.5-1.12-1.13-1.12h-.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

CursorTextSquareFillDuotone.displayName = 'CursorTextSquareFillDuotone';

// Triple export pattern
export { CursorTextSquareFillDuotone, CursorTextSquareFillDuotone as CursorTextSquareFillDuotoneIcon, CursorTextSquareFillDuotone as SiCursorTextSquareFillDuotone };
export default CursorTextSquareFillDuotone;
export type { CursorTextSquareFillDuotoneProps };
