import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SwatchBookFillProps = Omit<IconBaseProps, 'children'>;

const SwatchBookFill = memo(
  forwardRef<SVGSVGElement, SwatchBookFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="swatch-book-fill" {...props}>
      <path fillRule="evenodd" d="M9 2.13A2.9 2.9 0 0 1 11.88 5v.23l.16-.16a2.9 2.9 0 0 1 4.06 0l2.83 2.83a2.87 2.87 0 0 1 0 4.06l-.16.16H19A2.9 2.9 0 0 1 21.88 15v4A2.9 2.9 0 0 1 19 21.88H6.85q-.72-.03-1.37-.25h-.03l-.18-.07-.08-.03-.14-.06-.03-.01-.03-.02q-.3-.13-.57-.3l-.03-.03-.25-.16-.03-.02-.24-.2-.02-.01-.08-.07-.06-.05-.01-.01-.15-.14-.15-.17-.06-.06-.1-.1a4 4 0 0 1-.45-.66l-.01-.02-.02-.03-.12-.23-.02-.03v-.01a5 5 0 0 1-.5-2.02V5A2.87 2.87 0 0 1 5 2.13zm1.77 18H19c.62 0 1.13-.5 1.13-1.13v-4c0-.62-.5-1.12-1.13-1.12h-1.98zM7 15.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m7.87-9.45a1.13 1.13 0 0 0-1.6 0l-1.4 1.4v8.84l5.83-5.82c.43-.43.43-1.15 0-1.59z" clipRule="evenodd" />
    </IconBase>
  ))
);

SwatchBookFill.displayName = 'SwatchBookFill';

// Triple export pattern (lucide-react style)
export { SwatchBookFill, SwatchBookFill as SwatchBookFillIcon, SwatchBookFill as SiSwatchBookFill };
export default SwatchBookFill;
export type { SwatchBookFillProps };
