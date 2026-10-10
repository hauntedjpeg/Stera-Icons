import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSparkleRegularProps = Omit<IconBaseProps, 'children'>;

const TextSparkleRegular = memo(
  forwardRef<SVGSVGElement, TextSparkleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.39 10.26c.2-.58 1.02-.58 1.22 0l.25.69c.52 1.5 1.7 2.67 3.2 3.2l.68.24c.58.2.58 1.02 0 1.22l-.69.25c-1.5.52-2.67 1.7-3.2 3.2l-.24.68c-.2.58-1.02.58-1.22 0l-.25-.69c-.52-1.5-1.7-2.67-3.2-3.2l-.68-.24c-.58-.2-.58-1.02 0-1.22l.69-.25c1.5-.52 2.67-1.7 3.2-3.2zM8 17.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM8 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

TextSparkleRegular.displayName = 'TextSparkleRegular';

// Triple export pattern
export { TextSparkleRegular, TextSparkleRegular as TextSparkleRegularIcon, TextSparkleRegular as SiTextSparkleRegular };
export default TextSparkleRegular;
export type { TextSparkleRegularProps };
