import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MilestoneBoldProps = Omit<IconBaseProps, 'children'>;

const MilestoneBold = memo(
  forwardRef<SVGSVGElement, MilestoneBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c.55 0 1 .45 1 1v2h4.25c.72 0 1.43.26 1.97.74l3 2.63c.7.6.7 1.66 0 2.26l-3 2.63c-.54.48-1.25.74-1.97.74H13v7c0 .55-.45 1-1 1s-1-.45-1-1v-7H5c-1.66 0-3-1.34-3-3V8c0-1.66 1.34-3 3-3h6V3c0-.55.45-1 1-1M5 7c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h12.25q.37 0 .66-.25l2.57-2.25-2.57-2.25Q17.6 7 17.25 7z" clipRule="evenodd" />
    </IconBase>
  ))
);

MilestoneBold.displayName = 'MilestoneBold';

// Triple export pattern
export { MilestoneBold, MilestoneBold as MilestoneBoldIcon, MilestoneBold as SiMilestoneBold };
export default MilestoneBold;
export type { MilestoneBoldProps };
