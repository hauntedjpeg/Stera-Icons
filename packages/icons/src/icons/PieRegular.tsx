import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PieRegularProps = Omit<IconBaseProps, 'children'>;

const PieRegular = memo(
  forwardRef<SVGSVGElement, PieRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.47 7.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-1 1c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06zM13.47 7.47c.3-.3.77-.3 1.06 0l1 1c.3.3.3.77 0 1.06s-.77.3-1.06 0l-1-1c-.3-.3-.3-.77 0-1.06" />
        <path fillRule="evenodd" d="M12 4.25c4.97 0 9.1 2.8 10.5 6.79.2.59.26 1.35-.13 2.03-.44.76-1.16 1.34-2.03 1.57q-.04.16-.09.28l-1.07 3c-.39 1.1-1.43 1.83-2.59 1.83H7.41c-1.16 0-2.2-.73-2.59-1.83l-1.07-3-.08-.28c-.87-.23-1.6-.8-2.04-1.57-.39-.68-.33-1.44-.12-2.03C2.9 7.06 7.03 4.25 12 4.25m5 9.34c-.6.7-1.5 1.16-2.5 1.16s-1.9-.45-2.5-1.16c-.6.7-1.5 1.16-2.5 1.16S7.6 14.3 7 13.59c-.45.52-1.06.9-1.75 1.07l.98 2.76c.18.5.65.83 1.18.83h9.18c.53 0 1-.33 1.18-.83l.98-2.76c-.7-.16-1.3-.55-1.75-1.07m-5-7.84c-4.42 0-7.92 2.49-9.08 5.78q-.16.51.01.79c.3.53.85.89 1.46.93h.11c.84 0 1.56-.6 1.77-1.43.09-.34.39-.57.73-.57s.65.23.73.57c.2.84.94 1.43 1.77 1.43s1.56-.6 1.77-1.43c.09-.34.39-.57.73-.57s.65.23.73.57c.2.84.94 1.43 1.77 1.43s1.56-.6 1.77-1.43c.09-.34.39-.57.73-.57s.65.23.73.57c.2.84.94 1.43 1.77 1.43h.12c.6-.04 1.15-.4 1.45-.93.1-.18.13-.45 0-.79-1.15-3.3-4.65-5.78-9.07-5.78" clipRule="evenodd" />
    </IconBase>
  ))
);

PieRegular.displayName = 'PieRegular';

// Triple export pattern
export { PieRegular, PieRegular as PieRegularIcon, PieRegular as SiPieRegular };
export default PieRegular;
export type { PieRegularProps };
