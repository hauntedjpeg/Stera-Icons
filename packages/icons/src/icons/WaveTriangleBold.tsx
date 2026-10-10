import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveTriangleBoldProps = Omit<IconBaseProps, 'children'>;

const WaveTriangleBold = memo(
  forwardRef<SVGSVGElement, WaveTriangleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.5 4c.34 0 .66.17.84.46l8.16 12.69 3.66-5.7c.3-.46.92-.6 1.38-.3s.6.92.3 1.39l-4.5 7c-.18.29-.5.46-.84.46q-.47 0-.77-.36l-.07-.1L7.5 6.84l-3.66 5.7c-.3.46-.92.6-1.38.3-.47-.3-.6-.92-.3-1.38l4.5-7 .07-.1Q7.04 4 7.5 4" />
    </IconBase>
  ))
);

WaveTriangleBold.displayName = 'WaveTriangleBold';

// Triple export pattern
export { WaveTriangleBold, WaveTriangleBold as WaveTriangleBoldIcon, WaveTriangleBold as SiWaveTriangleBold };
export default WaveTriangleBold;
export type { WaveTriangleBoldProps };
