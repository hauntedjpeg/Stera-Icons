import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SwatchBookFillProps = Omit<IconBaseProps, 'children'>;

const SwatchBookFill = memo(
  forwardRef<SVGSVGElement, SwatchBookFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9 2.13c1.59 0 2.88 1.28 2.88 2.87v.23l.16-.16c1.12-1.13 2.94-1.13 4.06 0l2.83 2.83c1.13 1.12 1.13 2.94 0 4.06l-.16.16H19c1.59 0 2.88 1.3 2.88 2.88v4c0 1.59-1.3 2.88-2.88 2.88H6.85q-.72-.03-1.37-.25h-.03l-.18-.07-.08-.03-.14-.06-.03-.01-.03-.02q-.3-.13-.57-.3l-.03-.03-.25-.16-.03-.02-.24-.2-.02-.01-.08-.07-.06-.05-.01-.01-.15-.14-.15-.17-.06-.06-.1-.1-.12-.17q-.18-.23-.33-.5l-.01-.01-.02-.03-.12-.23-.02-.03v-.01q-.3-.6-.42-1.28v-.03l-.01-.04q-.06-.33-.06-.67V5C2.13 3.41 3.4 2.13 5 2.13zm1.77 18H19c.62 0 1.13-.5 1.13-1.13v-4c0-.62-.5-1.12-1.13-1.12h-1.98zM7 15.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25m7.87-9.45c-.44-.43-1.16-.43-1.6 0l-1.4 1.4v8.84l5.83-5.82c.43-.43.43-1.15 0-1.59z" clipRule="evenodd" />
    </IconBase>
  ))
);

SwatchBookFill.displayName = 'SwatchBookFill';

// Triple export pattern
export { SwatchBookFill, SwatchBookFill as SwatchBookFillIcon, SwatchBookFill as SiSwatchBookFill };
export default SwatchBookFill;
export type { SwatchBookFillProps };
