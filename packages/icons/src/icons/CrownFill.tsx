import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CrownFillProps = Omit<IconBaseProps, 'children'>;

const CrownFill = memo(
  forwardRef<SVGSVGElement, CrownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c1.31 0 2.38 1.06 2.38 2.37 0 .9-.5 1.68-1.24 2.08l1.75 4.91c.03.08.12.1.19.06l3.21-2.17q-.16-.41-.16-.88c0-1.31 1.06-2.37 2.37-2.37s2.38 1.06 2.38 2.37-1.07 2.38-2.38 2.38q-.22 0-.42-.04l-1.5 5.54c.77.4 1.3 1.2 1.3 2.12v1c0 1.04-.84 1.88-1.88 1.88H6c-1.04 0-1.87-.84-1.87-1.88v-1c0-.92.52-1.72 1.3-2.12l-1.5-5.54q-.22.03-.43.04c-1.31 0-2.37-1.07-2.37-2.38S2.19 6.13 3.5 6.13 5.88 7.19 5.88 8.5q-.01.46-.17.88l3.21 2.17q.13.07.19-.06l1.75-4.9c-.73-.4-1.23-1.2-1.23-2.09 0-1.31 1.06-2.37 2.37-2.37M6.5 17.88c-.35 0-.62.27-.62.62v1q0 .12.12.13h12q.12-.01.13-.13v-1c0-.35-.28-.62-.63-.62zm-3-10c-.35 0-.62.27-.62.62s.27.63.62.63.63-.28.63-.63-.28-.62-.63-.62m17 0c-.35 0-.62.27-.62.62s.27.63.62.63.63-.28.63-.63-.28-.62-.63-.62m-8.5-4c-.35 0-.62.27-.62.62s.27.63.62.63.63-.28.63-.63-.28-.62-.63-.62" clipRule="evenodd" />
    </IconBase>
  ))
);

CrownFill.displayName = 'CrownFill';

// Triple export pattern
export { CrownFill, CrownFill as CrownFillIcon, CrownFill as SiCrownFill };
export default CrownFill;
export type { CrownFillProps };
