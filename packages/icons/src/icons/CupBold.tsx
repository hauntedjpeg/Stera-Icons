import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CupBoldProps = Omit<IconBaseProps, 'children'>;

const CupBold = memo(
  forwardRef<SVGSVGElement, CupBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 4c2.27 0 4.35.23 5.9.62.77.19 1.46.43 1.98.74.46.27 1.12.8 1.12 1.64v.11l-.01.06-.15 1.85c1.78.17 3.16 1.66 3.16 3.48 0 1.93-1.57 3.5-3.5 3.5h-.99c-1.39 2.4-3.98 4-6.92 4H10.4c-4.17 0-7.64-3.21-7.97-7.37L2 7.17v-.09L2 7c0-.85.66-1.37 1.12-1.64.52-.3 1.21-.55 1.98-.74C6.65 4.22 8.73 4 11 4m6.83 5.1q-.44.16-.93.28c-1.55.4-3.63.62-5.9.62s-4.35-.23-5.9-.62q-.5-.12-.93-.27l.26 3.36C4.68 15.59 7.28 18 10.41 18h1.18c3.13 0 5.73-2.4 5.98-5.53zm1.73 3.53q-.05.7-.23 1.37h.17c.83 0 1.5-.67 1.5-1.5 0-.76-.57-1.4-1.31-1.49zM11 6c-2.15 0-4.07.22-5.41.56q-.85.22-1.3.44.45.23 1.3.44C6.93 7.78 8.85 8 11 8s4.07-.22 5.41-.56q.85-.22 1.3-.44-.45-.23-1.3-.44C15.07 6.22 13.15 6 11 6" clipRule="evenodd" />
    </IconBase>
  ))
);

CupBold.displayName = 'CupBold';

// Triple export pattern
export { CupBold, CupBold as CupBoldIcon, CupBold as SiCupBold };
export default CupBold;
export type { CupBoldProps };
