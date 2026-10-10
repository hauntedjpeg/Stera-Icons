import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandLeftFillProps = Omit<IconBaseProps, 'children'>;

const HandLeftFill = memo(
  forwardRef<SVGSVGElement, HandLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.09 2.95c.72 0 1.3.59 1.3 1.31v5.7c0 .34.29.62.63.62s.63-.28.63-.62V5.1c.07-.66.63-1.18 1.3-1.18.73 0 1.32.59 1.32 1.3v7.75c0 .28.18.53.46.6.27.07.56-.04.7-.29l1.6-2.7c.2-.36.55-.58.92-.64q.45-.08.87.16c.58.34.8 1.06.54 1.67l-.07.12-.04.08L19.07 15l-.03.12c-.56 3.37-3.5 5.94-7.02 5.94-3.93 0-7.11-3.19-7.11-7.12V7.16c0-.72.59-1.3 1.31-1.3.68 0 1.24.51 1.3 1.17v3.41c0 .35.29.63.63.63s.63-.28.63-.63V4.26c0-.72.59-1.3 1.3-1.3" />
    </IconBase>
  ))
);

HandLeftFill.displayName = 'HandLeftFill';

// Triple export pattern
export { HandLeftFill, HandLeftFill as HandLeftFillIcon, HandLeftFill as SiHandLeftFill };
export default HandLeftFill;
export type { HandLeftFillProps };
