import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignLeftRegularProps = Omit<IconBaseProps, 'children'>;

const TextAlignLeftRegular = memo(
  forwardRef<SVGSVGElement, TextAlignLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 17.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM13 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

TextAlignLeftRegular.displayName = 'TextAlignLeftRegular';

// Triple export pattern
export { TextAlignLeftRegular, TextAlignLeftRegular as TextAlignLeftRegularIcon, TextAlignLeftRegular as SiTextAlignLeftRegular };
export default TextAlignLeftRegular;
export type { TextAlignLeftRegularProps };
