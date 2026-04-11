import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSparkleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextSparkleFillDuotone = memo(
  forwardRef<SVGSVGElement, TextSparkleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 16.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5zM8 10.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5zM21 4.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5z" opacity={0.4} />
        <path d="M16.39 10.26a.65.65 0 0 1 1.22 0l.25.69a5.2 5.2 0 0 0 3.19 3.2l.7.24a.65.65 0 0 1 0 1.22l-.7.25a5.2 5.2 0 0 0-3.2 3.19l-.24.7a.65.65 0 0 1-1.22 0l-.25-.7a5.2 5.2 0 0 0-3.19-3.2l-.7-.24a.65.65 0 0 1 0-1.22l.7-.25a5.2 5.2 0 0 0 3.2-3.19z" />
    </IconBase>
  ))
);

TextSparkleFillDuotone.displayName = 'TextSparkleFillDuotone';

// Triple export pattern (lucide-react style)
export { TextSparkleFillDuotone, TextSparkleFillDuotone as TextSparkleFillDuotoneIcon, TextSparkleFillDuotone as SiTextSparkleFillDuotone };
export default TextSparkleFillDuotone;
export type { TextSparkleFillDuotoneProps };
