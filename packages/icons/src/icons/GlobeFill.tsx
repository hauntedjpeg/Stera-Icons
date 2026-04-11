import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GlobeFillProps = Omit<IconBaseProps, 'children'>;

const GlobeFill = memo(
  forwardRef<SVGSVGElement, GlobeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m4.42 10.75a14 14 0 0 1-2.4 6.99 8.1 8.1 0 0 0 6.06-7zm-7.09 0c.17 2.34 1 4.65 2.52 6.6l.15.18c1.6-1.99 2.5-4.37 2.67-6.78zm2.52-8.37a12 12 0 0 0-2.52 6.62h5.34A12 12 0 0 0 12 4.33zm2.18-.38a14 14 0 0 1 2.4 7h3.65a8.1 8.1 0 0 0-6.05-7" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeFill.displayName = 'GlobeFill';

// Triple export pattern (lucide-react style)
export { GlobeFill, GlobeFill as GlobeFillIcon, GlobeFill as SiGlobeFill };
export default GlobeFill;
export type { GlobeFillProps };
