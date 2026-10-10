import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VolleyballFillProps = Omit<IconBaseProps, 'children'>;

const VolleyballFill = memo(
  forwardRef<SVGSVGElement, VolleyballFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.25 11.98c.59 4.73 2.8 7.69 5.52 9.78l.2.15c-4.13-.42-7.51-3.37-8.58-7.27q.12-.3.25-.54c.23-.43.5-.77.9-1.2s.94-.77 1.7-.92M7 11.96c1.04.12 2.33.47 3.98 1.16.1 1.04.4 2.92 1.35 4.57.78 1.35 2 2.6 3.93 3.07l.34.08q-1.2.63-2.59.92c-.74-.34-1.47-.85-2.18-1.39-2.36-1.81-4.26-4.31-4.82-8.41M20.83 7.37c.72 1.39 1.14 2.96 1.14 4.63 0 2.85-1.2 5.42-3.12 7.23q-1.06.11-2.17-.16c-1.02-.26-1.77-.82-2.34-1.53 4.57-2.8 6.48-6.48 6.49-9.94z" />
        <path d="M17.1 3.43q.83.5 1.56 1.15c.31.93.42 1.95.42 3.02 0 2.73-1.49 5.88-5.62 8.42-.49-1.17-.67-2.4-.75-3.15 1.25-1.18 2.41-2.43 3.28-3.68 1.17-1.7 1.94-3.63 1.23-5.46zM4.6 8.25c1.83-1.39 3.9-1.54 5.77-1.12 1.52.34 2.84 1.04 3.7 1.7-.67.88-1.52 1.77-2.45 2.67-2.31-.97-4.14-1.38-5.6-1.35-1.7.04-2.88.64-3.74 1.54l-.25.27q0-.63.09-1.24c.94-1.28 1.5-1.73 2.48-2.47" />
        <path d="M12 2.03q.57 0 1.13.07c1.21.55 2.06 1.24 2.46 2.26q.46 1.2-.53 3.01c-1.07-.8-2.6-1.57-4.3-1.95-2.24-.5-4.88-.34-7.22 1.43l-.14.1C5.14 4.02 8.34 2.04 12 2.04" />
    </IconBase>
  ))
);

VolleyballFill.displayName = 'VolleyballFill';

// Triple export pattern
export { VolleyballFill, VolleyballFill as VolleyballFillIcon, VolleyballFill as SiVolleyballFill };
export default VolleyballFill;
export type { VolleyballFillProps };
