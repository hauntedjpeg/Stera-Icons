import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EuroCircleBoldProps = Omit<IconBaseProps, 'children'>;

const EuroCircleBold = memo(
  forwardRef<SVGSVGElement, EuroCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.5 6.5c.55 0 1 .45 1 1s-.45 1-1 1h-1.25c-1.27 0-1.84.27-2.14.63q-.2.22-.34.62h1.73c.55 0 1 .45 1 1s-.45 1-1 1h-2v.5h2c.55 0 1 .45 1 1s-.45 1-1 1h-1.73q.15.4.34.62c.3.36.87.63 2.14.63h1.25c.55 0 1 .45 1 1s-.45 1-1 1h-1.25c-1.48 0-2.79-.3-3.67-1.34q-.64-.78-.88-1.91H8c-.55 0-1-.45-1-1s.45-1 1-1h.5v-.5H8c-.55 0-1-.45-1-1s.45-1 1-1h.7q.24-1.13.88-1.91c.88-1.04 2.2-1.34 3.67-1.34z" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

EuroCircleBold.displayName = 'EuroCircleBold';

// Triple export pattern
export { EuroCircleBold, EuroCircleBold as EuroCircleBoldIcon, EuroCircleBold as SiEuroCircleBold };
export default EuroCircleBold;
export type { EuroCircleBoldProps };
