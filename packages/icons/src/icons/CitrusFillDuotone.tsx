import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CitrusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CitrusFillDuotone = memo(
  forwardRef<SVGSVGElement, CitrusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.58 17.14c-1.15-.15-2.27-.6-3.23-1.34l3.23-3.23zM14.56 15.8c-.96.74-2.08 1.19-3.23 1.34v-4.57zM17.14 11.33c-.15 1.15-.6 2.27-1.34 3.23l-3.23-3.23zM15.8 6.35c.74.96 1.19 2.08 1.34 3.23h-4.58z" opacity={0.4} />
        <path fillRule="evenodd" d="M17.91 2.13q.36 0 .62.25c2.23 2.23 3.35 5.16 3.34 8.08 0 2.92-1.11 5.84-3.34 8.07s-5.15 3.34-8.07 3.34-5.85-1.11-8.08-3.34q-.25-.26-.25-.62t.25-.62L17.3 2.4l.07-.07q.24-.19.55-.2m-.86 2.97c1.26 1.56 1.9 3.46 1.9 5.36 0 2.17-.83 4.34-2.5 6-1.65 1.66-3.82 2.49-6 2.49-1.9 0-3.8-.64-5.35-1.9l-.83.83c1.79 1.5 3.98 2.25 6.19 2.25 2.47 0 4.95-.95 6.83-2.84 1.89-1.88 2.83-4.36 2.84-6.83 0-2.2-.75-4.4-2.25-6.2zM6.35 15.8c.96.74 2.08 1.19 3.23 1.34v-4.57zm4.98 1.34c1.15-.15 2.27-.6 3.23-1.34l-3.23-3.23zm4.47-2.58c.74-.96 1.19-2.08 1.34-3.23h-4.57zm-3.24-4.98h4.58c-.15-1.15-.6-2.27-1.34-3.23z" clipRule="evenodd" />
    </IconBase>
  ))
);

CitrusFillDuotone.displayName = 'CitrusFillDuotone';

// Triple export pattern
export { CitrusFillDuotone, CitrusFillDuotone as CitrusFillDuotoneIcon, CitrusFillDuotone as SiCitrusFillDuotone };
export default CitrusFillDuotone;
export type { CitrusFillDuotoneProps };
