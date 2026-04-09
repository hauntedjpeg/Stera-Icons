import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HeartFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HeartFillDuotone = memo(
  forwardRef<SVGSVGElement, HeartFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="heart-fill-duotone" {...props}>
      <path d="M16.29 5.13A3.86 3.86 0 0 1 20.13 9c0 1.53-.73 2.81-1.2 3.52l-.2.27c-1.89 2.67-4.46 4.55-6.73 6.34-2.27-1.8-4.84-3.67-6.74-6.34a6.7 6.7 0 0 1-1.38-3.8 3.84 3.84 0 0 1 7.33-1.61.87.87 0 0 0 1.59 0 3.8 3.8 0 0 1 3.49-2.25" opacity={.4} />
        <path fillRule="evenodd" d="M16.29 3.38A5.6 5.6 0 0 1 21.88 9c0 2.05-.96 3.7-1.51 4.5l-.2.3c-2.24 3.15-5.35 5.3-7.62 7.13a.9.9 0 0 1-1.1 0c-2.12-1.71-5-3.72-7.19-6.55l-.43-.58A8.5 8.5 0 0 1 2.13 9 5.6 5.6 0 0 1 7.7 3.38c1.73 0 3.27.78 4.29 2.01a5.6 5.6 0 0 1 4.29-2.01m0 1.75c-1.55 0-2.88.92-3.5 2.25a.87.87 0 0 1-1.59 0A3.84 3.84 0 0 0 3.88 9c0 1.75.95 3.17 1.38 3.79 1.9 2.67 4.47 4.55 6.74 6.34 2.27-1.8 4.84-3.67 6.74-6.34l.18-.27c.48-.7 1.2-1.99 1.2-3.52a3.86 3.86 0 0 0-3.83-3.87" clipRule="evenodd" />
    </IconBase>
  ))
);

HeartFillDuotone.displayName = 'HeartFillDuotone';

// Triple export pattern (lucide-react style)
export { HeartFillDuotone, HeartFillDuotone as HeartFillDuotoneIcon, HeartFillDuotone as SiHeartFillDuotone };
export default HeartFillDuotone;
export type { HeartFillDuotoneProps };
