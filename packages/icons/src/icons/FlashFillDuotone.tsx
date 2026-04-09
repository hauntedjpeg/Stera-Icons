import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlashFillDuotone = memo(
  forwardRef<SVGSVGElement, FlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flash-fill-duotone" {...props}>
      <path d="M12.92 9.91c-.15.46.1.94.54 1.1l3.83 1.33-7.87 6.91 1.66-5.16a.9.9 0 0 0-.54-1.1L6.7 11.66l7.86-6.91z" opacity={.4} />
        <path fillRule="evenodd" d="M15.8 1.34a.88.88 0 0 1 1.4.93l-2.36 7.37 4.45 1.53a.88.88 0 0 1 .29 1.49l-11.38 10a.88.88 0 0 1-1.4-.93l2.36-7.37-4.45-1.53a.88.88 0 0 1-.29-1.49zM6.7 11.66 10.55 13c.45.16.69.64.54 1.1l-1.66 5.16 7.87-6.91L13.46 11a.9.9 0 0 1-.54-1.1l1.65-5.16z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlashFillDuotone.displayName = 'FlashFillDuotone';

// Triple export pattern (lucide-react style)
export { FlashFillDuotone, FlashFillDuotone as FlashFillDuotoneIcon, FlashFillDuotone as SiFlashFillDuotone };
export default FlashFillDuotone;
export type { FlashFillDuotoneProps };
