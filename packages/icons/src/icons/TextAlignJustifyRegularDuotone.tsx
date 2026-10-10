import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignJustifyRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignJustifyRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignJustifyRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={.4} />
        <path d="M21 17.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

TextAlignJustifyRegularDuotone.displayName = 'TextAlignJustifyRegularDuotone';

// Triple export pattern
export { TextAlignJustifyRegularDuotone, TextAlignJustifyRegularDuotone as TextAlignJustifyRegularDuotoneIcon, TextAlignJustifyRegularDuotone as SiTextAlignJustifyRegularDuotone };
export default TextAlignJustifyRegularDuotone;
export type { TextAlignJustifyRegularDuotoneProps };
