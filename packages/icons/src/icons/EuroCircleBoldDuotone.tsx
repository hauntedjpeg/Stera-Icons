import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EuroCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EuroCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, EuroCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M14.5 6.5c.55 0 1 .45 1 1s-.45 1-1 1h-1.25c-1.27 0-1.84.27-2.14.63q-.2.22-.34.62h1.73c.55 0 1 .45 1 1s-.45 1-1 1h-2v.5h2c.55 0 1 .45 1 1s-.45 1-1 1h-1.73q.15.4.34.62c.3.36.87.63 2.14.63h1.25c.55 0 1 .45 1 1s-.45 1-1 1h-1.25c-1.48 0-2.79-.3-3.67-1.34q-.64-.78-.88-1.91H8c-.55 0-1-.45-1-1s.45-1 1-1h.5v-.5H8c-.55 0-1-.45-1-1s.45-1 1-1h.7q.24-1.13.88-1.91c.88-1.04 2.2-1.34 3.67-1.34z" />
    </IconBase>
  ))
);

EuroCircleBoldDuotone.displayName = 'EuroCircleBoldDuotone';

// Triple export pattern
export { EuroCircleBoldDuotone, EuroCircleBoldDuotone as EuroCircleBoldDuotoneIcon, EuroCircleBoldDuotone as SiEuroCircleBoldDuotone };
export default EuroCircleBoldDuotone;
export type { EuroCircleBoldDuotoneProps };
