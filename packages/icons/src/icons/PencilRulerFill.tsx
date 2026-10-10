import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilRulerFillProps = Omit<IconBaseProps, 'children'>;

const PencilRulerFill = memo(
  forwardRef<SVGSVGElement, PencilRulerFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.5 20.75c0 .97-.78 1.75-1.75 1.75h-3.5c-.97 0-1.75-.78-1.75-1.75V19.5h7zM18.75 2.5c.97 0 1.75.78 1.75 1.75v16.5c0 .97-.78 1.75-1.75 1.75h-3.5c-.97 0-1.75-.78-1.75-1.75v-2.5h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V13.5h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8.75h3c.55 0 1-.45 1-1s-.45-1-1-1h-3v-2.5c0-.97.78-1.75 1.75-1.75zM10.5 17.5h-7v-10h7zM7 1.5q.23 0 .38.17l3 3.5q.12.15.12.33h-7q0-.18.12-.33l3-3.5q.15-.16.38-.17" />
    </IconBase>
  ))
);

PencilRulerFill.displayName = 'PencilRulerFill';

// Triple export pattern
export { PencilRulerFill, PencilRulerFill as PencilRulerFillIcon, PencilRulerFill as SiPencilRulerFill };
export default PencilRulerFill;
export type { PencilRulerFillProps };
