import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CandleFillProps = Omit<IconBaseProps, 'children'>;

const CandleFill = memo(
  forwardRef<SVGSVGElement, CandleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.43 1.34c.33-.29.81-.29 1.14 0l.02.01.03.03.1.1q.14.12.36.34c.3.3.7.71 1.1 1.2.4.5.81 1.08 1.13 1.7s.56 1.34.56 2.08c0 1.12-.43 2.15-1.15 2.9q.63.46.94 1.2.17.45.2.95l.01 1.15v5.13h2.52q.16.01.37.07l.15.06.15.09q.43.3.58.8l.03.17v.16q0 .23-.04.38l-.13.4c-.19.56-.33 1.04-.6 1.42-.37.5-.9.88-1.5 1.07-.44.13-.93.13-1.53.13H8.13c-.6 0-1.1 0-1.54-.13-.6-.19-1.12-.57-1.48-1.07-.28-.38-.42-.86-.62-1.43l-.12-.4q-.07-.19-.04-.53l.03-.17c.1-.38.37-.7.73-.89l.15-.06q.22-.06.37-.07h2.52V13q0-.68.02-1.15.02-.49.2-.95.3-.73.93-1.2c-.72-.75-1.16-1.78-1.16-2.9 0-.74.25-1.46.57-2.07.32-.63.73-1.22 1.13-1.7.4-.5.8-.92 1.1-1.21l.36-.35.1-.1q.03 0 .03-.02zM6.2 19.88c.19.53.24.67.32.78q.21.3.58.41c.13.05.3.06 1.02.06h7.74c.72 0 .89-.01 1.02-.06q.36-.12.58-.41c.08-.1.13-.25.32-.78zM12 3.2q-.37.38-.82.92c-.35.43-.69.9-.93 1.39q-.38.74-.38 1.28c0 1.34 1 2.33 2.13 2.33s2.12-1 2.12-2.33q0-.55-.37-1.28c-.24-.48-.58-.96-.93-1.4q-.45-.53-.82-.9" clipRule="evenodd" />
    </IconBase>
  ))
);

CandleFill.displayName = 'CandleFill';

// Triple export pattern
export { CandleFill, CandleFill as CandleFillIcon, CandleFill as SiCandleFill };
export default CandleFill;
export type { CandleFillProps };
