import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextUnderlineRegularProps = Omit<IconBaseProps, 'children'>;

const TextUnderlineRegular = memo(
  forwardRef<SVGSVGElement, TextUnderlineRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 19.25c.41 0 .75.34.75.75s-.34.75-.75.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM17.5 3.25c.41 0 .75.34.75.75v7c0 3.45-2.8 6.25-6.25 6.25S5.75 14.45 5.75 11V4c0-.41.34-.75.75-.75s.75.34.75.75v7c0 2.62 2.13 4.75 4.75 4.75s4.75-2.13 4.75-4.75V4c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

TextUnderlineRegular.displayName = 'TextUnderlineRegular';

// Triple export pattern
export { TextUnderlineRegular, TextUnderlineRegular as TextUnderlineRegularIcon, TextUnderlineRegular as SiTextUnderlineRegular };
export default TextUnderlineRegular;
export type { TextUnderlineRegularProps };
