import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TvPlayAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TvPlayAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, TvPlayAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.6 5.25q1.64-.01 2.69.06t1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v1.2q.02 1.64-.06 2.69-.06 1.05-.46 1.87c-.45.89-1.18 1.62-2.07 2.07-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06H9.4q-1.64.02-2.69-.06-1.05-.06-1.87-.46c-.89-.45-1.62-1.18-2.07-2.07-.28-.55-.4-1.16-.46-1.87q-.07-1.04-.06-2.69v-1.2q-.02-1.64.06-2.69.06-1.05.46-1.87c.45-.89 1.18-1.62 2.07-2.07.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zm-5.2 1.5c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v1.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h5.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57v-1.2c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05z" clipRule="evenodd" opacity={.4} />
        <path d="M10.4 9.73c.31-.04.7.19 1.5.64l2.17 1.24c.8.46 1.2.68 1.33.98.11.26.11.56 0 .82-.14.3-.53.52-1.33.98l-2.18 1.24c-.78.45-1.18.68-1.5.64q-.43-.06-.7-.4c-.19-.27-.19-.72-.19-1.63v-2.48c0-.9 0-1.36.19-1.62q.27-.36.7-.41M9.16 1.83c.38-.19.83-.04 1.01.33l1.54 3.09h-1.68l-1.2-2.42c-.19-.37-.04-.82.33-1M13.33 3.16c.18-.37.63-.52 1-.33.38.18.53.63.34 1l-.7 1.42h-1.68z" />
    </IconBase>
  ))
);

TvPlayAltRegularDuotone.displayName = 'TvPlayAltRegularDuotone';

// Triple export pattern
export { TvPlayAltRegularDuotone, TvPlayAltRegularDuotone as TvPlayAltRegularDuotoneIcon, TvPlayAltRegularDuotone as SiTvPlayAltRegularDuotone };
export default TvPlayAltRegularDuotone;
export type { TvPlayAltRegularDuotoneProps };
