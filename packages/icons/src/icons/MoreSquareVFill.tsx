import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreSquareVFillProps = Omit<IconBaseProps, 'children'>;

const MoreSquareVFill = memo(
  forwardRef<SVGSVGElement, MoreSquareVFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-square-v-fill" {...props}>
      <path fillRule="evenodd" d="M21.38 12.5c0 1.39 0 2.48-.08 3.36a6 6 0 0 1-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08h1c1.39 0 2.48 0 3.36.08s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36zm-8-4.5a1.37 1.37 0 1 0-2.75 0 1.37 1.37 0 0 0 2.74 0m0 4a1.37 1.37 0 1 0-2.75 0 1.37 1.37 0 0 0 2.74 0m0 4a1.37 1.37 0 1 0-2.75 0 1.37 1.37 0 0 0 2.74 0" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreSquareVFill.displayName = 'MoreSquareVFill';

// Triple export pattern (lucide-react style)
export { MoreSquareVFill, MoreSquareVFill as MoreSquareVFillIcon, MoreSquareVFill as SiMoreSquareVFill };
export default MoreSquareVFill;
export type { MoreSquareVFillProps };
