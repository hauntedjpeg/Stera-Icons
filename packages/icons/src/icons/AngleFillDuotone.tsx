import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AngleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AngleFillDuotone = memo(
  forwardRef<SVGSVGElement, AngleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.85 13.24c.79-.26 1.64.18 1.9.96v.01c.25.8-.18 1.64-.97 1.9-.79.25-1.63-.18-1.89-.97-.26-.8.18-1.64.96-1.9M16.44 9.55c.67-.48 1.6-.34 2.1.33v.01c.5.67.34 1.61-.33 2.1s-1.6.34-2.1-.33v-.01c-.49-.67-.34-1.6.33-2.1M13.01 6.79c.49-.67 1.43-.82 2.1-.33.68.5.82 1.43.34 2.1-.5.67-1.43.82-2.1.33-.68-.5-.83-1.43-.34-2.1M8.9 5.22c.25-.79 1.1-1.22 1.89-.97.8.26 1.23 1.11.97 1.9s-1.1 1.22-1.9.96S8.64 6 8.9 5.2" opacity={0.4} />
        <path d="M6 3.5c.83 0 1.5.67 1.5 1.5v12.5H20c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H6c-.83 0-1.5-.67-1.5-1.5V5c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

AngleFillDuotone.displayName = 'AngleFillDuotone';

// Triple export pattern
export { AngleFillDuotone, AngleFillDuotone as AngleFillDuotoneIcon, AngleFillDuotone as SiAngleFillDuotone };
export default AngleFillDuotone;
export type { AngleFillDuotoneProps };
