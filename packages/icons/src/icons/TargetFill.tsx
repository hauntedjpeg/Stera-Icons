import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TargetFillProps = Omit<IconBaseProps, 'children'>;

const TargetFill = memo(
  forwardRef<SVGSVGElement, TargetFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 5.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5S8.41 5.5 12 5.5m0 4c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 1.75C7.51 3.88 3.88 7.5 3.88 12S7.5 20.13 12 20.13s8.13-3.64 8.13-8.13S16.49 3.88 12 3.88" clipRule="evenodd" />
    </IconBase>
  ))
);

TargetFill.displayName = 'TargetFill';

// Triple export pattern
export { TargetFill, TargetFill as TargetFillIcon, TargetFill as SiTargetFill };
export default TargetFill;
export type { TargetFillProps };
