import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VolleyballFillProps = Omit<IconBaseProps, 'children'>;

const VolleyballFill = memo(
  forwardRef<SVGSVGElement, VolleyballFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="volleyball-fill" {...props}>
      <path d="M5.25 11.98c.59 4.73 2.8 7.69 5.52 9.78l.2.15a10 10 0 0 1-8.58-7.27 5 5 0 0 1 1.16-1.74c.4-.42.93-.77 1.7-.92M7 11.96c1.04.12 2.33.47 3.98 1.16.1 1.04.4 2.92 1.35 4.57a6.2 6.2 0 0 0 3.93 3.07l.34.08a10 10 0 0 1-2.59.92c-.74-.34-1.47-.85-2.18-1.39a12 12 0 0 1-4.82-8.41M20.83 7.37a9.9 9.9 0 0 1-1.98 11.86q-1.06.11-2.17-.16a4.2 4.2 0 0 1-2.34-1.53c4.57-2.8 6.48-6.48 6.49-9.94z" />
        <path d="M17.1 3.43a10 10 0 0 1 1.56 1.15c.31.93.42 1.95.42 3.02 0 2.73-1.49 5.88-5.62 8.42-.49-1.17-.67-2.4-.75-3.15a24 24 0 0 0 3.28-3.68c1.17-1.7 1.94-3.63 1.23-5.46zM4.6 8.25a6.8 6.8 0 0 1 5.77-1.12 10 10 0 0 1 3.7 1.7c-.67.88-1.52 1.77-2.45 2.67-2.31-.97-4.14-1.38-5.6-1.35a5 5 0 0 0-3.99 1.81q0-.63.09-1.24A10 10 0 0 1 4.6 8.25" />
        <path d="M12 2.03q.57 0 1.13.07c1.21.55 2.06 1.24 2.46 2.26q.46 1.2-.53 3.01c-1.07-.8-2.6-1.57-4.3-1.95A8.5 8.5 0 0 0 3.4 6.96 10 10 0 0 1 12 2.03" />
    </IconBase>
  ))
);

VolleyballFill.displayName = 'VolleyballFill';

// Triple export pattern (lucide-react style)
export { VolleyballFill, VolleyballFill as VolleyballFillIcon, VolleyballFill as SiVolleyballFill };
export default VolleyballFill;
export type { VolleyballFillProps };
