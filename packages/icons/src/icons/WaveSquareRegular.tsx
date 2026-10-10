import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveSquareRegularProps = Omit<IconBaseProps, 'children'>;

const WaveSquareRegular = memo(
  forwardRef<SVGSVGElement, WaveSquareRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.75 4.25c1.1 0 2 .9 2 2v11.5c0 .28.22.5.5.5h6.5c.28 0 .5-.22.5-.5V12c0-.41.34-.75.75-.75s.75.34.75.75v5.75c0 1.1-.9 2-2 2h-6.5c-1.1 0-2-.9-2-2V6.25c0-.28-.22-.5-.5-.5h-6.5c-.28 0-.5.22-.5.5V12c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.25c0-1.1.9-2 2-2z" />
    </IconBase>
  ))
);

WaveSquareRegular.displayName = 'WaveSquareRegular';

// Triple export pattern
export { WaveSquareRegular, WaveSquareRegular as WaveSquareRegularIcon, WaveSquareRegular as SiWaveSquareRegular };
export default WaveSquareRegular;
export type { WaveSquareRegularProps };
