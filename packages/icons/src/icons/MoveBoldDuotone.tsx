import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoveBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoveBoldDuotone = memo(
  forwardRef<SVGSVGElement, MoveBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 5.41V11h5.59l1 1-1 1H13v5.59l-1 1-1-1V13H5.41l-1-1 1-1H11V5.41l1-1z" opacity={.4} />
        <path d="M13.8 17.8c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-2.5 2.5q-.28.3-.7.3t-.7-.3l-2.5-2.5c-.4-.38-.4-1.02 0-1.4.38-.4 1.02-.4 1.4 0l1.8 1.79zM4.8 8.8c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L4.42 12l1.8 1.8c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-2.5-2.5q-.28-.28-.29-.7t.3-.7zM17.8 8.8c.38-.4 1.02-.4 1.4 0l2.5 2.5q.3.28.3.7t-.3.7l-2.5 2.5c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l1.79-1.8-1.8-1.8c-.39-.38-.39-1.02 0-1.4M12 2q.42 0 .7.3l2.5 2.5c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L12 4.42l-1.8 1.8c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l2.5-2.5.07-.06Q11.64 2 12 2" />
    </IconBase>
  ))
);

MoveBoldDuotone.displayName = 'MoveBoldDuotone';

// Triple export pattern
export { MoveBoldDuotone, MoveBoldDuotone as MoveBoldDuotoneIcon, MoveBoldDuotone as SiMoveBoldDuotone };
export default MoveBoldDuotone;
export type { MoveBoldDuotoneProps };
