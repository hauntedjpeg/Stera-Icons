import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WifiFillProps = Omit<IconBaseProps, 'children'>;

const WifiFill = memo(
  forwardRef<SVGSVGElement, WifiFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 14c1.27 0 2.44.41 3.4 1.12.43.32.42.95.05 1.33l-2.02 2.08c-.78.8-2.08.8-2.86 0l-2.02-2.08c-.37-.38-.38-1.01.06-1.33.95-.7 2.12-1.12 3.39-1.12" />
        <path d="M12 9c2.6 0 5 .96 6.85 2.56.41.35.41.97.03 1.36l-.66.69c-.4.4-1.04.4-1.48.04C15.43 12.62 13.78 12 12 12s-3.43.62-4.74 1.65c-.44.35-1.08.36-1.48-.04l-.66-.7c-.38-.38-.38-1 .03-1.35C7 9.96 9.39 9 12 9" />
        <path d="M12 4c3.95 0 7.56 1.52 10.3 4.01.4.37.4.99.02 1.37l-.67.69c-.39.4-1.03.4-1.46.03C18 8.17 15.13 7 12 7s-5.99 1.17-8.2 3.1c-.42.37-1.06.37-1.45-.03l-.67-.69c-.38-.38-.38-1 .02-1.37C4.44 5.51 8.05 4 12 4" />
    </IconBase>
  ))
);

WifiFill.displayName = 'WifiFill';

// Triple export pattern
export { WifiFill, WifiFill as WifiFillIcon, WifiFill as SiWifiFill };
export default WifiFill;
export type { WifiFillProps };
