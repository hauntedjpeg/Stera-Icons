import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AwardStarFillProps = Omit<IconBaseProps, 'children'>;

const AwardStarFill = memo(
  forwardRef<SVGSVGElement, AwardStarFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.12 2.73c.4-.64 1.36-.64 1.77 0l.07.15 1.17 2.7 2.93.27c.91.08 1.3 1.22.6 1.83L15.44 9.6l.65 2.86c.2.9-.77 1.6-1.56 1.13L13 12.7V16h.2c2.12.11 3.8 1.86 3.8 4h.5c.55 0 1 .45 1 1s-.45 1-1 1h-11c-.55 0-1-.45-1-1s.45-1 1-1H7c0-2.14 1.68-3.89 3.8-4h.2v-3.3l-1.53.9c-.79.47-1.77-.22-1.56-1.13l.65-2.86-2.21-1.93c-.7-.61-.32-1.75.59-1.83l2.93-.27 1.17-2.7zM11 18c-1.1 0-2 .9-2 2h6c0-1.1-.9-2-2-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

AwardStarFill.displayName = 'AwardStarFill';

// Triple export pattern
export { AwardStarFill, AwardStarFill as AwardStarFillIcon, AwardStarFill as SiAwardStarFill };
export default AwardStarFill;
export type { AwardStarFillProps };
