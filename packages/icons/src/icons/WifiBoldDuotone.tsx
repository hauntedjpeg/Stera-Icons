import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WifiBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const WifiBoldDuotone = memo(
  forwardRef<SVGSVGElement, WifiBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 14.25c1.21 0 2.33.4 3.25 1.07.29.21.31.66.02.96l-2.01 2.07c-.7.7-1.83.7-2.51 0l-2.02-2.07c-.29-.3-.27-.75.03-.96.91-.67 2.03-1.07 3.24-1.07" opacity={.4} />
        <path d="M12 9.25c2.55 0 4.88.94 6.7 2.5.28.24.3.7 0 1l-.66.68c-.3.3-.79.31-1.15.03-1.35-1.07-3.05-1.71-4.89-1.71s-3.54.64-4.9 1.7c-.35.3-.85.28-1.14-.02l-.66-.68c-.3-.3-.28-.76 0-1 1.82-1.56 4.15-2.5 6.7-2.5" />
        <path d="M12 4.25c3.89 0 7.43 1.49 10.13 3.95.3.26.3.71.01 1l-.66.7c-.3.3-.79.3-1.12.01C18.1 7.94 15.19 6.75 12 6.75s-6.1 1.2-8.36 3.16c-.33.3-.82.28-1.12-.01l-.66-.7c-.29-.29-.28-.74 0-1C4.57 5.74 8.12 4.25 12 4.25" />
    </IconBase>
  ))
);

WifiBoldDuotone.displayName = 'WifiBoldDuotone';

// Triple export pattern
export { WifiBoldDuotone, WifiBoldDuotone as WifiBoldDuotoneIcon, WifiBoldDuotone as SiWifiBoldDuotone };
export default WifiBoldDuotone;
export type { WifiBoldDuotoneProps };
