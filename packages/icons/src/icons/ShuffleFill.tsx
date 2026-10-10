import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShuffleFillProps = Omit<IconBaseProps, 'children'>;

const ShuffleFill = memo(
  forwardRef<SVGSVGElement, ShuffleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6 6.12C7.39 6.12 8.49 7 9.35 8c.87 1 1.66 2.33 2.4 3.56.76 1.27 1.47 2.45 2.22 3.31.77.88 1.42 1.26 2.03 1.26h1.63V14.5c0-.35.2-.67.54-.8.32-.14.7-.07.95.18l2.5 2.5q.24.26.25.62 0 .36-.25.62l-2.5 2.5c-.25.25-.63.32-.96.19-.32-.14-.54-.46-.54-.81v-1.63H16c-1.39 0-2.49-.86-3.35-1.86-.87-1-1.66-2.33-2.4-3.56-.76-1.27-1.47-2.45-2.22-3.31C7.26 8.26 6.6 7.87 6 7.87H3c-.48 0-.87-.39-.87-.87s.39-.88.87-.88zM8.5 14.28c.28-.38.83-.46 1.22-.17.38.29.46.83.17 1.22-.96 1.3-2.22 2.54-3.89 2.54H3c-.48 0-.87-.39-.87-.87s.39-.88.87-.88h3c.75 0 1.55-.57 2.5-1.84" />
        <path d="M18.17 3.7c.32-.14.7-.07.95.18l2.5 2.5q.24.26.25.62 0 .36-.25.62l-2.5 2.5c-.25.25-.63.32-.96.19-.32-.14-.54-.46-.54-.81V7.87H16c-.75 0-1.55.58-2.5 1.85-.28.39-.83.47-1.22.18-.39-.3-.46-.84-.18-1.23.97-1.29 2.23-2.55 3.9-2.55h1.63V4.5c0-.35.2-.67.54-.8" />
    </IconBase>
  ))
);

ShuffleFill.displayName = 'ShuffleFill';

// Triple export pattern
export { ShuffleFill, ShuffleFill as ShuffleFillIcon, ShuffleFill as SiShuffleFill };
export default ShuffleFill;
export type { ShuffleFillProps };
