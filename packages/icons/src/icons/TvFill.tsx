import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TvFillProps = Omit<IconBaseProps, 'children'>;

const TvFill = memo(
  forwardRef<SVGSVGElement, TvFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.6 4.25q1.13-.01 1.87.04.75.04 1.37.34c.66.34 1.2.87 1.53 1.53q.3.62.34 1.37.05.74.04 1.87v3.2q.01 1.13-.04 1.87-.04.75-.34 1.37c-.34.66-.87 1.2-1.53 1.53q-.39.2-.84.27l.71 2.12c.13.4-.08.82-.47.95-.4.13-.82-.08-.95-.47l-.83-2.5-.86.01H6.54l-.83 2.49c-.13.39-.55.6-.95.47s-.6-.55-.47-.95l.7-2.12q-.44-.08-.83-.27c-.66-.34-1.2-.87-1.53-1.53q-.3-.63-.34-1.37t-.04-1.87V9.4q-.01-1.13.04-1.87.04-.75.34-1.37c.34-.66.87-1.2 1.53-1.53q.63-.3 1.37-.34t1.87-.04z" />
    </IconBase>
  ))
);

TvFill.displayName = 'TvFill';

// Triple export pattern
export { TvFill, TvFill as TvFillIcon, TvFill as SiTvFill };
export default TvFill;
export type { TvFillProps };
