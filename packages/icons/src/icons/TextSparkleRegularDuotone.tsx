import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSparkleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextSparkleRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextSparkleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 17.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM8 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path d="M16.39 10.26a.65.65 0 0 1 1.22 0l.25.69a5.2 5.2 0 0 0 3.19 3.2l.7.24a.65.65 0 0 1 0 1.22l-.7.25a5.2 5.2 0 0 0-3.2 3.19l-.24.7a.65.65 0 0 1-1.22 0l-.25-.7a5.2 5.2 0 0 0-3.19-3.2l-.7-.24a.65.65 0 0 1 0-1.22l.7-.25a5.2 5.2 0 0 0 3.2-3.19z" />
    </IconBase>
  ))
);

TextSparkleRegularDuotone.displayName = 'TextSparkleRegularDuotone';

// Triple export pattern (lucide-react style)
export { TextSparkleRegularDuotone, TextSparkleRegularDuotone as TextSparkleRegularDuotoneIcon, TextSparkleRegularDuotone as SiTextSparkleRegularDuotone };
export default TextSparkleRegularDuotone;
export type { TextSparkleRegularDuotoneProps };
