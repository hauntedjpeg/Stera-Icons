import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextQuoteRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextQuoteRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextQuoteRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 11.25c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-6c0-.41.34-.75.75-.75" opacity={.4} />
        <path d="M21 17.25c.41 0 .75.34.75.75s-.34.75-.75.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM16 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

TextQuoteRegularDuotone.displayName = 'TextQuoteRegularDuotone';

// Triple export pattern
export { TextQuoteRegularDuotone, TextQuoteRegularDuotone as TextQuoteRegularDuotoneIcon, TextQuoteRegularDuotone as SiTextQuoteRegularDuotone };
export default TextQuoteRegularDuotone;
export type { TextQuoteRegularDuotoneProps };
