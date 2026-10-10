import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveTriangleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveTriangleBoldDuotone = memo(
  forwardRef<SVGSVGElement, WaveTriangleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.16 11.46c.3-.47.92-.6 1.38-.3.47.3.6.91.3 1.38l-4.5 7c-.18.29-.5.46-.84.46q-.47 0-.77-.36l-.07-.1-4.5-7 1.68-1.08 3.66 5.69z" opacity={.4} />
        <path d="M7.5 4c.34 0 .66.17.84.46l4.5 7-1.68 1.08-3.66-5.7-3.66 5.7c-.3.46-.92.6-1.38.3s-.6-.92-.3-1.38l4.5-7 .07-.1Q7.04 4 7.5 4" />
    </IconBase>
  ))
);

WaveTriangleBoldDuotone.displayName = 'WaveTriangleBoldDuotone';

// Triple export pattern
export { WaveTriangleBoldDuotone, WaveTriangleBoldDuotone as WaveTriangleBoldDuotoneIcon, WaveTriangleBoldDuotone as SiWaveTriangleBoldDuotone };
export default WaveTriangleBoldDuotone;
export type { WaveTriangleBoldDuotoneProps };
