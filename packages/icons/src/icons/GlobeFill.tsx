import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GlobeFillProps = Omit<IconBaseProps, 'children'>;

const GlobeFill = memo(
  forwardRef<SVGSVGElement, GlobeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m4.42 10.75c-.15 2.45-.95 4.87-2.4 6.99 3.24-.83 5.7-3.6 6.06-7zm-7.09 0c.17 2.34 1 4.65 2.52 6.6l.15.18c1.6-1.99 2.5-4.37 2.67-6.78zm2.52-8.37c-1.51 1.96-2.35 4.27-2.52 6.62h5.34C14.5 8.7 13.6 6.33 12 4.33zm2.18-.38c1.44 2.12 2.24 4.54 2.4 7h3.65c-.37-3.4-2.82-6.17-6.05-7" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeFill.displayName = 'GlobeFill';

// Triple export pattern
export { GlobeFill, GlobeFill as GlobeFillIcon, GlobeFill as SiGlobeFill };
export default GlobeFill;
export type { GlobeFillProps };
