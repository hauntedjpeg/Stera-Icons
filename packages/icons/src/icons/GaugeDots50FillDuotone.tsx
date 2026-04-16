import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots50FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots50FillDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots50FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.55 15.45a1.12 1.12 0 1 0-1.59 1.59 1.12 1.12 0 0 0 1.6-1.6m8.49 0a1.12 1.12 0 1 0-1.6 1.59 1.12 1.12 0 0 0 1.6-1.6M12 5.13c-.37 0-.7.23-.82.56l-.04.15-.01.06-.03.16-.44 2.44a60 60 0 0 0-.54 3.5 1.88 1.88 0 1 0 3.75-.07c-.04-.51-.3-2.07-.53-3.43l-.44-2.44-.03-.16v-.05h-.01a.9.9 0 0 0-.86-.72m-6 5.75a1.13 1.13 0 1 0 0 2.25 1.13 1.13 0 0 0 0-2.26m12 0a1.13 1.13 0 1 0 0 2.25 1.13 1.13 0 0 0 0-2.26M8.55 6.96a1.12 1.12 0 1 0-1.59 1.6 1.12 1.12 0 0 0 1.6-1.6m8.49 0a1.12 1.12 0 1 0-1.6 1.6 1.12 1.12 0 0 0 1.6-1.6" clipRule="evenodd" opacity={.4} />
        <path d="M6.96 15.45a1.12 1.12 0 1 1 1.6 1.59 1.12 1.12 0 0 1-1.6-1.6M15.45 15.45a1.12 1.12 0 1 1 1.59 1.59 1.12 1.12 0 0 1-1.6-1.6M12 5.13c.42 0 .78.3.86.71l.01.06.03.16.44 2.44a60 60 0 0 1 .54 3.5 1.88 1.88 0 1 1-3.75-.07c.04-.51.3-2.07.53-3.43l.44-2.44.03-.16v-.05h.01l.04-.16a.9.9 0 0 1 .82-.57M6 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M18 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M6.96 6.96a1.12 1.12 0 1 1 1.6 1.6 1.12 1.12 0 0 1-1.6-1.6M15.45 6.96a1.12 1.12 0 1 1 1.59 1.6 1.12 1.12 0 0 1-1.6-1.6" />
    </IconBase>
  ))
);

GaugeDots50FillDuotone.displayName = 'GaugeDots50FillDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots50FillDuotone, GaugeDots50FillDuotone as GaugeDots50FillDuotoneIcon, GaugeDots50FillDuotone as SiGaugeDots50FillDuotone };
export default GaugeDots50FillDuotone;
export type { GaugeDots50FillDuotoneProps };
