import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShuffleFillProps = Omit<IconBaseProps, 'children'>;

const ShuffleFill = memo(
  forwardRef<SVGSVGElement, ShuffleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6 6.12C7.39 6.12 8.49 7 9.35 8c.87 1 1.66 2.33 2.4 3.56a25 25 0 0 0 2.22 3.31c.77.88 1.42 1.26 2.03 1.26h1.63V14.5a.88.88 0 0 1 1.49-.62l2.5 2.5a.9.9 0 0 1 0 1.24l-2.5 2.5a.88.88 0 0 1-1.5-.62v-1.63H16c-1.39 0-2.49-.86-3.35-1.86-.87-1-1.66-2.33-2.4-3.56a25 25 0 0 0-2.22-3.31C7.26 8.26 6.6 7.87 6 7.87H3a.87.87 0 1 1 0-1.75zM8.5 14.28a.88.88 0 0 1 1.4 1.05c-.97 1.3-2.23 2.54-3.9 2.54H3a.87.87 0 1 1 0-1.75h3c.75 0 1.55-.57 2.5-1.84" />
        <path d="M18.17 3.7c.32-.14.7-.07.95.18l2.5 2.5a.9.9 0 0 1 0 1.24l-2.5 2.5a.88.88 0 0 1-1.5-.62V7.87H16c-.75 0-1.55.58-2.5 1.85a.88.88 0 0 1-1.4-1.05c.97-1.29 2.23-2.55 3.9-2.55h1.63V4.5c0-.35.2-.67.54-.8" />
    </IconBase>
  ))
);

ShuffleFill.displayName = 'ShuffleFill';

// Triple export pattern (lucide-react style)
export { ShuffleFill, ShuffleFill as ShuffleFillIcon, ShuffleFill as SiShuffleFill };
export default ShuffleFill;
export type { ShuffleFillProps };
