import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TvFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TvFillDuotone = memo(
  forwardRef<SVGSVGElement, TvFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m5 17.64.53.07 1.01.04-.83 2.49c-.13.39-.55.6-.95.47s-.6-.55-.47-.95zM19.71 19.76c.13.4-.08.82-.47.95-.4.13-.82-.08-.95-.47l-.83-2.5q.57 0 1-.03l.54-.07z" />
        <path d="M16.6 4.25q1.13-.01 1.87.04.75.04 1.37.34c.66.34 1.2.87 1.53 1.53q.3.62.34 1.37.05.74.04 1.87v3.2q.01 1.13-.04 1.87-.04.75-.34 1.37c-.34.66-.87 1.2-1.53 1.53q-.62.3-1.37.34-.74.05-1.87.04H7.4q-1.13.01-1.87-.04-.75-.04-1.37-.34c-.66-.34-1.2-.87-1.53-1.53q-.3-.63-.34-1.37t-.04-1.87V9.4q-.01-1.13.04-1.87.04-.75.34-1.37c.34-.66.87-1.2 1.53-1.53q.63-.3 1.37-.34t1.87-.04z" opacity={.4} />
    </IconBase>
  ))
);

TvFillDuotone.displayName = 'TvFillDuotone';

// Triple export pattern
export { TvFillDuotone, TvFillDuotone as TvFillDuotoneIcon, TvFillDuotone as SiTvFillDuotone };
export default TvFillDuotone;
export type { TvFillDuotoneProps };
