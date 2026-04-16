import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots15FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots15FillDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots15FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.55 15.45a1.12 1.12 0 1 0-1.59 1.59 1.12 1.12 0 0 0 1.6-1.6m8.49 0a1.12 1.12 0 1 0-1.6 1.59 1.12 1.12 0 0 0 1.6-1.6m-5.1-5.32c-.52.04-2.08.3-3.44.53l-2.44.44-.16.03h-.05v.01a.87.87 0 0 0-.16 1.68l.15.04.06.01.16.03 2.44.44a60 60 0 0 0 3.5.54 1.88 1.88 0 1 0-.07-3.75m6.06.74a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.26m-9.45-3.9a1.12 1.12 0 1 0-1.59 1.58 1.12 1.12 0 0 0 1.6-1.59m8.49 0a1.12 1.12 0 1 0-1.6 1.58 1.12 1.12 0 0 0 1.6-1.59M12 4.86a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.25" clipRule="evenodd" opacity={.4} />
        <path d="M6.96 15.45a1.12 1.12 0 1 1 1.6 1.59 1.12 1.12 0 0 1-1.6-1.6M15.45 15.45a1.12 1.12 0 1 1 1.59 1.59 1.12 1.12 0 0 1-1.6-1.6M12 10.13a1.88 1.88 0 1 1-.07 3.74c-.51-.04-2.07-.3-3.43-.53l-2.44-.44-.16-.03h-.05v-.01l-.16-.04a.88.88 0 0 1 .15-1.68l.06-.01.16-.03 2.44-.44a60 60 0 0 1 3.5-.54M18 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M6.96 6.96a1.12 1.12 0 1 1 1.6 1.6 1.12 1.12 0 0 1-1.6-1.6M15.45 6.96a1.12 1.12 0 1 1 1.59 1.6 1.12 1.12 0 0 1-1.6-1.6M12 4.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25" />
    </IconBase>
  ))
);

GaugeDots15FillDuotone.displayName = 'GaugeDots15FillDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots15FillDuotone, GaugeDots15FillDuotone as GaugeDots15FillDuotoneIcon, GaugeDots15FillDuotone as SiGaugeDots15FillDuotone };
export default GaugeDots15FillDuotone;
export type { GaugeDots15FillDuotoneProps };
