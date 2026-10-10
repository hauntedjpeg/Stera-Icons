import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclePlaceholderRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderRegularDuotone = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m13.53 20.1-.36.07q-.82.11-1.63.06l-7.77-7.77q-.04-.82.06-1.63l.06-.36zM17.04 18.53l-.49.35q-.4.27-.8.47L4.65 8.25q.21-.4.47-.8.16-.25.35-.5zM19.35 15.75q-.21.4-.47.8-.16.25-.35.5L6.96 5.46l.49-.35q.4-.26.8-.47zM10.83 3.83q.81-.11 1.63-.06l7.77 7.77q.04.82-.06 1.63l-.06.36-9.64-9.64z" opacity={0.4} />
        <path fillRule="evenodd" d="M10.62 2.35c2.93-.42 6.02.5 8.27 2.76s3.18 5.34 2.76 8.27c-.2 1.4-.7 2.77-1.51 4q-.54.8-1.25 1.51t-1.51 1.25c-1.23.8-2.6 1.31-4 1.51-2.93.42-6.02-.5-8.27-2.76s-3.18-5.34-2.76-8.27c.2-1.4.7-2.77 1.52-4q.52-.8 1.24-1.51.71-.72 1.51-1.24c1.23-.82 2.6-1.32 4-1.52m7.21 3.82c-1.9-1.91-4.51-2.69-7-2.34q-1.8.26-3.38 1.29-.68.45-1.28 1.05T5.12 7.45C4.43 8.49 4 9.65 3.83 10.83c-.35 2.49.43 5.1 2.34 7 1.9 1.91 4.52 2.69 7 2.34q1.8-.26 3.38-1.29.68-.45 1.28-1.05t1.05-1.28c.69-1.04 1.12-2.2 1.29-3.38.35-2.48-.43-5.1-2.34-7" clipRule="evenodd" />
    </IconBase>
  ))
);

CirclePlaceholderRegularDuotone.displayName = 'CirclePlaceholderRegularDuotone';

// Triple export pattern
export { CirclePlaceholderRegularDuotone, CirclePlaceholderRegularDuotone as CirclePlaceholderRegularDuotoneIcon, CirclePlaceholderRegularDuotone as SiCirclePlaceholderRegularDuotone };
export default CirclePlaceholderRegularDuotone;
export type { CirclePlaceholderRegularDuotoneProps };
