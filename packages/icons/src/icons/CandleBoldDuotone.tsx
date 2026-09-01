import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CandleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CandleBoldDuotone = memo(
  forwardRef<SVGSVGElement, CandleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.4 18q.16.01.4.09l.17.06.16.1q.46.3.63.87l.03.18.01.18q-.01.26-.05.4-.05.21-.13.41c-.18.57-.34 1.06-.62 1.46a3 3 0 0 1-1.55 1.12c-.47.14-.99.13-1.58.13H8.13c-.6 0-1.1.01-1.58-.13A3 3 0 0 1 5 21.75c-.28-.4-.44-.9-.62-1.46q-.08-.2-.13-.4a2 2 0 0 1-.04-.59l.03-.18q.18-.65.8-.97l.16-.06q.25-.08.4-.08l.43-.01h12.36m-12 2c.13.4.17.5.23.58q.2.27.52.38c.1.03.25.04.98.04h7.74c.73 0 .87-.01.98-.04a1 1 0 0 0 .52-.38c.05-.07.1-.18.24-.58zM11.42 1.19a1 1 0 0 1 1.24.05v.02l.04.02.47.45c.3.3.7.72 1.1 1.22a10 10 0 0 1 1.15 1.72c.32.63.58 1.36.58 2.13 0 1.1-.41 2.12-1.1 2.88a3 3 0 0 0-.75-.45 3 3 0 0 0-.99-.2Q12.7 8.98 12 9q-.68 0-1.16.02-.5.02-.99.2a3 3 0 0 0-.76.46A4.3 4.3 0 0 1 8 6.8c0-.77.26-1.5.58-2.13a10 10 0 0 1 1.14-1.72 15 15 0 0 1 1.58-1.67l.03-.02.01-.01zm.58 2.2q-.34.34-.72.82-.54.65-.92 1.37Q10 6.29 10 6.8c0 1.28.96 2.2 2 2.2s2-.92 2-2.2q0-.5-.36-1.22a8 8 0 0 0-.92-1.37q-.38-.48-.72-.82" opacity={0.4} />
        <path d="M12 11c-.48 0-.79 0-1.03.02q-.31.02-.35.06a1 1 0 0 0-.54.54q-.04.04-.06.35c-.02.24-.02.55-.02 1.03v5H8v-5q0-.68.02-1.16.02-.5.2-.99a3 3 0 0 1 1.63-1.62q.5-.2.99-.2Q11.3 8.98 12 9q.68 0 1.16.02.5.02.99.2a3 3 0 0 1 1.62 1.63q.2.5.2.99.04.47.03 1.16v5h-2v-5c0-.48 0-.79-.02-1.03a1 1 0 0 0-.06-.35 1 1 0 0 0-.54-.54 1 1 0 0 0-.35-.06C12.79 11 12.48 11 12 11" />
    </IconBase>
  ))
);

CandleBoldDuotone.displayName = 'CandleBoldDuotone';

// Triple export pattern (lucide-react style)
export { CandleBoldDuotone, CandleBoldDuotone as CandleBoldDuotoneIcon, CandleBoldDuotone as SiCandleBoldDuotone };
export default CandleBoldDuotone;
export type { CandleBoldDuotoneProps };
