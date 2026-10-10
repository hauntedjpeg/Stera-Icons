import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextBBoldProps = Omit<IconBaseProps, 'children'>;

const TextBBold = memo(
  forwardRef<SVGSVGElement, TextBBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 3c2.76 0 5 2.24 5 5 0 1.27-.48 2.43-1.26 3.31 1.9.71 3.26 2.54 3.26 4.69 0 2.76-2.24 5-5 5H8.84q-.72 0-1.24-.03-.55-.03-1.08-.27-.8-.42-1.22-1.22c-.18-.35-.24-.72-.27-1.08q-.04-.52-.03-1.24V6.84q0-.73.03-1.24.03-.55.27-1.08.42-.8 1.22-1.22c.35-.18.72-.24 1.08-.27q.52-.04 1.24-.03zM8.84 13c-.51 0-.84 0-1.08.02s-.3.05-.34.07q-.21.11-.34.33c0 .03-.04.1-.06.34S7 14.33 7 14.84v2.32c0 .51 0 .84.02 1.08s.05.3.06.34q.13.22.34.34c.03 0 .1.04.34.06s.57.02 1.08.02H14c1.66 0 3-1.34 3-3s-1.34-3-3-3zm0-8c-.51 0-.84 0-1.08.02s-.3.05-.34.06q-.21.13-.34.34c0 .03-.04.1-.06.34S7 6.33 7 6.84v2.32c0 .51 0 .84.02 1.08s.05.3.06.34q.13.22.34.33c.03.02.1.05.34.07s.57.02 1.08.02H12c1.66 0 3-1.34 3-3s-1.34-3-3-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

TextBBold.displayName = 'TextBBold';

// Triple export pattern
export { TextBBold, TextBBold as TextBBoldIcon, TextBBold as SiTextBBold };
export default TextBBold;
export type { TextBBoldProps };
