import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlashFillProps = Omit<IconBaseProps, 'children'>;

const FlashFill = memo(
  forwardRef<SVGSVGElement, FlashFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.8 1.34c.3-.26.73-.29 1.05-.07s.48.62.36 1l-2.37 7.37 4.45 1.53c.29.1.5.36.57.66s-.05.62-.28.83l-11.38 10c-.3.26-.73.29-1.05.07s-.48-.62-.36-1l2.37-7.37-4.45-1.53c-.29-.1-.5-.36-.57-.66s.05-.62.28-.83z" />
    </IconBase>
  ))
);

FlashFill.displayName = 'FlashFill';

// Triple export pattern
export { FlashFill, FlashFill as FlashFillIcon, FlashFill as SiFlashFill };
export default FlashFill;
export type { FlashFillProps };
