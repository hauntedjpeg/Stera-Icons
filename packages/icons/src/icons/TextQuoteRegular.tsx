import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextQuoteRegularProps = Omit<IconBaseProps, 'children'>;

const TextQuoteRegular = memo(
  forwardRef<SVGSVGElement, TextQuoteRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 11.25c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-6c0-.41.34-.75.75-.75M21 17.25c.41 0 .75.34.75.75s-.34.75-.75.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM16 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

TextQuoteRegular.displayName = 'TextQuoteRegular';

// Triple export pattern
export { TextQuoteRegular, TextQuoteRegular as TextQuoteRegularIcon, TextQuoteRegular as SiTextQuoteRegular };
export default TextQuoteRegular;
export type { TextQuoteRegularProps };
