import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlashFillDuotone = memo(
  forwardRef<SVGSVGElement, FlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.92 9.91c-.15.46.1.94.54 1.1l3.83 1.33-7.87 6.91 1.66-5.16c.15-.46-.1-.94-.54-1.1L6.7 11.66l7.86-6.91z" opacity={.4} />
        <path fillRule="evenodd" d="M15.8 1.34c.3-.26.73-.29 1.05-.07s.48.62.36 1l-2.37 7.37 4.45 1.53c.29.1.5.36.57.66s-.05.62-.28.83l-11.38 10c-.3.26-.73.29-1.05.07s-.48-.62-.36-1l2.37-7.37-4.45-1.53c-.29-.1-.5-.36-.57-.66s.05-.62.28-.83zM6.7 11.66 10.55 13c.45.16.69.64.54 1.1l-1.66 5.16 7.87-6.91L13.46 11c-.45-.16-.69-.64-.54-1.1l1.65-5.16z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlashFillDuotone.displayName = 'FlashFillDuotone';

// Triple export pattern
export { FlashFillDuotone, FlashFillDuotone as FlashFillDuotoneIcon, FlashFillDuotone as SiFlashFillDuotone };
export default FlashFillDuotone;
export type { FlashFillDuotoneProps };
