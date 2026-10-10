import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CupBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CupBoldDuotone = memo(
  forwardRef<SVGSVGElement, CupBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19.84 9.02c1.78.17 3.16 1.66 3.16 3.48 0 1.93-1.57 3.5-3.5 3.5h-.99c-1.39 2.4-3.98 4-6.92 4H10.4c-4.17 0-7.64-3.21-7.97-7.37L2 7.17c.08.75.69 1.22 1.11 1.47q.46.26 1.05.47l.26 3.36C4.68 15.59 7.28 18 10.41 18h1.18c3.13 0 5.73-2.4 5.98-5.53l.26-3.36q.6-.21 1.05-.47c.42-.25 1.03-.72 1.1-1.47zm-.28 3.6q-.05.72-.23 1.38h.17c.83 0 1.5-.67 1.5-1.5 0-.76-.57-1.4-1.31-1.49z" clipRule="evenodd" opacity={0.4} />
        <path d="M2 7.11v-.03zM20 7.08v.03z" opacity={0.4} />
        <path fillRule="evenodd" d="M11 4c2.27 0 4.35.23 5.9.62.77.19 1.46.43 1.98.74.46.27 1.12.8 1.12 1.64 0 .85-.66 1.37-1.12 1.64-.52.3-1.21.55-1.98.74-1.55.4-3.63.62-5.9.62s-4.35-.23-5.9-.62c-.77-.19-1.46-.43-1.98-.74C2.66 8.37 2 7.84 2 7c0-.85.66-1.37 1.12-1.64.52-.3 1.21-.55 1.98-.74C6.65 4.22 8.73 4 11 4m0 2c-2.15 0-4.07.22-5.41.56q-.85.22-1.3.44.45.23 1.3.44C6.93 7.78 8.85 8 11 8s4.07-.22 5.41-.56q.85-.22 1.3-.44-.45-.23-1.3-.44C15.07 6.22 13.15 6 11 6" clipRule="evenodd" />
    </IconBase>
  ))
);

CupBoldDuotone.displayName = 'CupBoldDuotone';

// Triple export pattern
export { CupBoldDuotone, CupBoldDuotone as CupBoldDuotoneIcon, CupBoldDuotone as SiCupBoldDuotone };
export default CupBoldDuotone;
export type { CupBoldDuotoneProps };
