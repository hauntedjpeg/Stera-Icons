import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSparkleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextSparkleRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextSparkleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 17.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM8 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path d="M16.39 10.26c.2-.58 1.02-.58 1.22 0l.25.69c.52 1.5 1.7 2.67 3.19 3.2l.7.24c.57.2.57 1.02 0 1.22l-.7.25c-1.5.52-2.67 1.7-3.2 3.19l-.24.7c-.2.57-1.02.57-1.22 0l-.25-.7c-.52-1.5-1.7-2.67-3.19-3.2l-.7-.24c-.57-.2-.57-1.02 0-1.22l.7-.25c1.5-.52 2.67-1.7 3.2-3.19z" />
    </IconBase>
  ))
);

TextSparkleRegularDuotone.displayName = 'TextSparkleRegularDuotone';

// Triple export pattern
export { TextSparkleRegularDuotone, TextSparkleRegularDuotone as TextSparkleRegularDuotoneIcon, TextSparkleRegularDuotone as SiTextSparkleRegularDuotone };
export default TextSparkleRegularDuotone;
export type { TextSparkleRegularDuotoneProps };
