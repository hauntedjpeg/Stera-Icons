import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextFillProps = Omit<IconBaseProps, 'children'>;

const TextFill = memo(
  forwardRef<SVGSVGElement, TextFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-fill" {...props}>
      <path d="M17 2.75c1.8 0 3.25 1.46 3.25 3.25a1.25 1.25 0 1 1-2.5 0 .75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v12c0 .41.34.75.75.75h1a1.25 1.25 0 1 1 0 2.5H9a1.25 1.25 0 1 1 0-2.5h1c.41 0 .75-.34.75-.75V6a.75.75 0 0 0-.75-.75H7a.75.75 0 0 0-.75.75 1.25 1.25 0 1 1-2.5 0c0-1.8 1.46-3.25 3.25-3.25z" />
    </IconBase>
  ))
);

TextFill.displayName = 'TextFill';

// Triple export pattern (lucide-react style)
export { TextFill, TextFill as TextFillIcon, TextFill as SiTextFill };
export default TextFill;
export type { TextFillProps };
