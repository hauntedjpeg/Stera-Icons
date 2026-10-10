import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveSquareRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveSquareRegularDuotone = memo(
  forwardRef<SVGSVGElement, WaveSquareRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 11.25c.41 0 .75.34.75.75v5.75c0 1.1-.9 2-2 2h-6.5c-1.1 0-2-.9-2-2V12h1.5v5.75c0 .28.22.5.5.5h6.5c.28 0 .5-.22.5-.5V12c0-.41.34-.75.75-.75" opacity={.4} />
        <path d="M10.75 4.25c1.1 0 2 .9 2 2V12h-1.5V6.25c0-.28-.22-.5-.5-.5h-6.5c-.28 0-.5.22-.5.5V12c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.25c0-1.1.9-2 2-2z" />
    </IconBase>
  ))
);

WaveSquareRegularDuotone.displayName = 'WaveSquareRegularDuotone';

// Triple export pattern
export { WaveSquareRegularDuotone, WaveSquareRegularDuotone as WaveSquareRegularDuotoneIcon, WaveSquareRegularDuotone as SiWaveSquareRegularDuotone };
export default WaveSquareRegularDuotone;
export type { WaveSquareRegularDuotoneProps };
