import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots50FillProps = Omit<IconBaseProps, 'children'>;

const GaugeDots50Fill = memo(
  forwardRef<SVGSVGElement, GaugeDots50FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.55 15.45a1.12 1.12 0 1 0-1.59 1.59 1.12 1.12 0 0 0 1.6-1.6m8.49 0a1.12 1.12 0 1 0-1.6 1.59 1.12 1.12 0 0 0 1.6-1.6M12 5.13c-.37 0-.7.23-.82.56l-.04.15-.01.06-.03.16-.44 2.44a60 60 0 0 0-.54 3.5 1.88 1.88 0 1 0 3.75-.07c-.04-.51-.3-2.07-.53-3.43l-.44-2.44-.03-.16v-.05h-.01a.9.9 0 0 0-.86-.72m-6 5.75a1.13 1.13 0 1 0 0 2.25 1.13 1.13 0 0 0 0-2.26m12 0a1.13 1.13 0 1 0 0 2.25 1.13 1.13 0 0 0 0-2.26M8.55 6.96a1.12 1.12 0 1 0-1.59 1.6 1.12 1.12 0 0 0 1.6-1.6m8.49 0a1.12 1.12 0 1 0-1.6 1.6 1.12 1.12 0 0 0 1.6-1.6" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots50Fill.displayName = 'GaugeDots50Fill';

// Triple export pattern (lucide-react style)
export { GaugeDots50Fill, GaugeDots50Fill as GaugeDots50FillIcon, GaugeDots50Fill as SiGaugeDots50Fill };
export default GaugeDots50Fill;
export type { GaugeDots50FillProps };
