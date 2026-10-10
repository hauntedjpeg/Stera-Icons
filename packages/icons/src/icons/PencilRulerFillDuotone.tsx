import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilRulerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PencilRulerFillDuotone = memo(
  forwardRef<SVGSVGElement, PencilRulerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.15 2.5c.76.08 1.35.72 1.35 1.5v17c0 .83-.67 1.5-1.5 1.5h-4c-.83 0-1.5-.67-1.5-1.5v-2.75H17c.55 0 1-.45 1-1s-.45-1-1-1h-3.5V13.5H17c.55 0 1-.45 1-1s-.45-1-1-1h-3.5V8.75H17c.55 0 1-.45 1-1s-.45-1-1-1h-3.5V4c0-.83.67-1.5 1.5-1.5h4.15M10.5 21c0 .83-.67 1.5-1.5 1.5H5c-.83 0-1.5-.67-1.5-1.5v-1.5h7zM10.5 17.5h-7V8h7zM7 1.5q.23 0 .38.17l3 3.5q.12.15.12.33V6h-7v-.5q0-.18.12-.33l3-3.5q.15-.16.38-.17" opacity={0.4} />
        <path d="M10.5 19.5h-7v-2h7zM17 16.25c.55 0 1 .45 1 1s-.45 1-1 1h-3.5v-2zM17 11.5c.55 0 1 .45 1 1s-.45 1-1 1h-3.5v-2zM17 6.75c.55 0 1 .45 1 1s-.45 1-1 1h-3.5v-2zM10.5 8h-7V6h7z" />
    </IconBase>
  ))
);

PencilRulerFillDuotone.displayName = 'PencilRulerFillDuotone';

// Triple export pattern
export { PencilRulerFillDuotone, PencilRulerFillDuotone as PencilRulerFillDuotoneIcon, PencilRulerFillDuotone as SiPencilRulerFillDuotone };
export default PencilRulerFillDuotone;
export type { PencilRulerFillDuotoneProps };
