import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSparkleFillProps = Omit<IconBaseProps, 'children'>;

const TextSparkleFill = memo(
  forwardRef<SVGSVGElement, TextSparkleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-sparkle-fill" {...props}>
      <path d="M16.39 10.26a.65.65 0 0 1 1.22 0l.25.69a5.2 5.2 0 0 0 3.2 3.2l.68.24a.65.65 0 0 1 0 1.22l-.69.25a5.2 5.2 0 0 0-3.2 3.2l-.24.68a.65.65 0 0 1-1.22 0l-.25-.69a5.2 5.2 0 0 0-3.2-3.2l-.68-.24a.65.65 0 0 1 0-1.22l.69-.25a5.2 5.2 0 0 0 3.2-3.2zM8 16.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5zM8 10.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5zM21 4.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

TextSparkleFill.displayName = 'TextSparkleFill';

// Triple export pattern (lucide-react style)
export { TextSparkleFill, TextSparkleFill as TextSparkleFillIcon, TextSparkleFill as SiTextSparkleFill };
export default TextSparkleFill;
export type { TextSparkleFillProps };
