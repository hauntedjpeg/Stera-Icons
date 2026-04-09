import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlashFillProps = Omit<IconBaseProps, 'children'>;

const FlashFill = memo(
  forwardRef<SVGSVGElement, FlashFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="flash-fill" {...props}>
      <path d="M15.8 1.34a.88.88 0 0 1 1.4.93l-2.36 7.37 4.45 1.53a.88.88 0 0 1 .29 1.49l-11.38 10a.88.88 0 0 1-1.4-.93l2.36-7.37-4.45-1.53a.88.88 0 0 1-.29-1.49z" />
    </IconBase>
  ))
);

FlashFill.displayName = 'FlashFill';

// Triple export pattern (lucide-react style)
export { FlashFill, FlashFill as FlashFillIcon, FlashFill as SiFlashFill };
export default FlashFill;
export type { FlashFillProps };
