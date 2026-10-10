import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextCircleBoldProps = Omit<IconBaseProps, 'children'>;

const CursorTextCircleBold = memo(
  forwardRef<SVGSVGElement, CursorTextCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10 6.5c.77 0 1.47.3 2 .77.53-.48 1.23-.77 2-.77h.5c.55 0 1 .45 1 1s-.45 1-1 1H14c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h.5c.55 0 1 .45 1 1s-.45 1-1 1H14c-.77 0-1.47-.3-2-.77-.53.48-1.23.77-2 .77h-.5c-.55 0-1-.45-1-1s.45-1 1-1h.5c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1h-.5c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorTextCircleBold.displayName = 'CursorTextCircleBold';

// Triple export pattern
export { CursorTextCircleBold, CursorTextCircleBold as CursorTextCircleBoldIcon, CursorTextCircleBold as SiCursorTextCircleBold };
export default CursorTextCircleBold;
export type { CursorTextCircleBoldProps };
