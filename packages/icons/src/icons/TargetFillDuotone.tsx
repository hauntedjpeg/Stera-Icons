import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TargetFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TargetFillDuotone = memo(
  forwardRef<SVGSVGElement, TargetFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7.38c2.55 0 4.63 2.07 4.63 4.62s-2.08 4.63-4.63 4.63S7.38 14.55 7.38 12 9.45 7.38 12 7.38m0 2.12c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5" opacity={0.4} />
        <path d="M12 3.88c4.49 0 8.13 3.63 8.13 8.12s-3.64 8.13-8.13 8.13S3.88 16.49 3.88 12 7.5 3.88 12 3.88m0 1.75c-3.52 0-6.37 2.85-6.37 6.37s2.85 6.38 6.37 6.38 6.38-2.86 6.38-6.38S15.52 5.63 12 5.63" opacity={0.4} />
        <path d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5" />
        <path fillRule="evenodd" d="M12 5.63c3.52 0 6.38 2.85 6.38 6.37s-2.86 6.38-6.38 6.38S5.63 15.52 5.63 12 8.48 5.63 12 5.63m0 1.75c-2.55 0-4.62 2.07-4.62 4.62s2.07 4.63 4.62 4.63 4.63-2.08 4.63-4.63S14.55 7.38 12 7.38" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 1.75C7.51 3.88 3.88 7.5 3.88 12S7.5 20.13 12 20.13s8.13-3.64 8.13-8.13S16.49 3.88 12 3.88" clipRule="evenodd" />
    </IconBase>
  ))
);

TargetFillDuotone.displayName = 'TargetFillDuotone';

// Triple export pattern
export { TargetFillDuotone, TargetFillDuotone as TargetFillDuotoneIcon, TargetFillDuotone as SiTargetFillDuotone };
export default TargetFillDuotone;
export type { TargetFillDuotoneProps };
