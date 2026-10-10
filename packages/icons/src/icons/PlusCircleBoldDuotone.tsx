import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlusCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, PlusCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M12 7c.56 0 1 .45 1 1v3h3c.55 0 1 .44 1 1 0 .55-.45 1-1 1h-3v3c0 .55-.44 1-1 1-.55 0-1-.45-1-1v-3H8c-.55 0-1-.45-1-1 0-.56.45-1 1-1h3V8c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

PlusCircleBoldDuotone.displayName = 'PlusCircleBoldDuotone';

// Triple export pattern
export { PlusCircleBoldDuotone, PlusCircleBoldDuotone as PlusCircleBoldDuotoneIcon, PlusCircleBoldDuotone as SiPlusCircleBoldDuotone };
export default PlusCircleBoldDuotone;
export type { PlusCircleBoldDuotoneProps };
