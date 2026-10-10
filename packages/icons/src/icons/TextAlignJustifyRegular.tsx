import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignJustifyRegularProps = Omit<IconBaseProps, 'children'>;

const TextAlignJustifyRegular = memo(
  forwardRef<SVGSVGElement, TextAlignJustifyRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 17.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

TextAlignJustifyRegular.displayName = 'TextAlignJustifyRegular';

// Triple export pattern
export { TextAlignJustifyRegular, TextAlignJustifyRegular as TextAlignJustifyRegularIcon, TextAlignJustifyRegular as SiTextAlignJustifyRegular };
export default TextAlignJustifyRegular;
export type { TextAlignJustifyRegularProps };
