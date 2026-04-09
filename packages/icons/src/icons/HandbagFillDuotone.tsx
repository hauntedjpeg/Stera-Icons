import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandbagFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandbagFillDuotone = memo(
  forwardRef<SVGSVGElement, HandbagFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="handbag-fill-duotone" {...props}>
      <path d="M15.24 8.62c1.01 0 1.78-.01 2.43.26q.84.36 1.39 1.06c.43.57.62 1.3.88 2.29l.54 2q.36 1.25.52 2.09c.1.57.13 1.1-.03 1.63-.23.8-.76 1.49-1.47 1.93-.47.28-1 .4-1.57.44q-.85.07-2.15.05H8.22q-1.3.01-2.15-.05a3.5 3.5 0 0 1-1.57-.44 3.4 3.4 0 0 1-1.47-1.93A3.5 3.5 0 0 1 3 16.32q.16-.83.52-2.1l.54-2c.26-.97.44-1.71.88-2.28q.56-.71 1.38-1.06c.66-.27 1.43-.26 2.44-.26z" opacity={.4} />
        <path d="M12 3.63A4.4 4.4 0 0 1 16.38 8v.64q-.52-.03-1.14-.02h-.62V8a2.63 2.63 0 0 0-5.24 0v.63H7.63V8A4.37 4.37 0 0 1 12 3.63" />
    </IconBase>
  ))
);

HandbagFillDuotone.displayName = 'HandbagFillDuotone';

// Triple export pattern (lucide-react style)
export { HandbagFillDuotone, HandbagFillDuotone as HandbagFillDuotoneIcon, HandbagFillDuotone as SiHandbagFillDuotone };
export default HandbagFillDuotone;
export type { HandbagFillDuotoneProps };
