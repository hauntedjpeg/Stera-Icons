import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CandleBoldProps = Omit<IconBaseProps, 'children'>;

const CandleBold = memo(
  forwardRef<SVGSVGElement, CandleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.42 1.19c.37-.27.88-.25 1.24.05v.02l.04.02.1.1q.15.12.37.35c.3.3.7.72 1.1 1.22s.83 1.08 1.15 1.72S16 6.03 16 6.8c0 1.1-.41 2.12-1.1 2.88q.58.47.87 1.17.2.5.2.99.04.47.03 1.16v5h2.39q.16.02.41.09l.17.06.16.1q.46.3.63.87l.03.18.01.18q-.01.25-.05.4-.05.21-.13.41c-.18.57-.34 1.06-.62 1.46q-.6.8-1.55 1.12c-.47.14-.99.13-1.58.13H8.13c-.6 0-1.1.01-1.58-.13-.62-.2-1.17-.6-1.55-1.12-.28-.4-.44-.9-.62-1.46q-.08-.2-.13-.4c-.03-.13-.08-.34-.04-.59l.03-.18q.18-.65.8-.97l.16-.06q.24-.08.4-.08l.43-.01H8v-5q0-.68.02-1.16.02-.5.2-.99.3-.7.87-1.17C8.41 8.92 8 7.9 8 6.8c0-.77.26-1.5.58-2.13.32-.64.74-1.23 1.14-1.72.4-.5.8-.92 1.1-1.22l.37-.35.11-.1.03-.02.01-.01zM6.39 20c.14.4.18.5.24.58q.2.27.52.38c.1.03.25.04.98.04h7.74c.73 0 .87-.01.98-.04q.33-.1.52-.38c.05-.07.1-.18.24-.58zM12 11c-.48 0-.79 0-1.03.02q-.31.02-.35.06-.38.16-.54.54-.04.04-.06.35c-.02.24-.02.55-.02 1.03v5h4v-5c0-.48 0-.79-.02-1.03q-.02-.31-.06-.35-.17-.38-.54-.54-.04-.04-.35-.06C12.79 11 12.48 11 12 11m0-7.61q-.34.34-.72.82-.54.65-.92 1.37Q10 6.29 10 6.8c0 1.28.96 2.2 2 2.2s2-.92 2-2.2q0-.5-.36-1.22-.38-.72-.92-1.37-.38-.48-.72-.82" clipRule="evenodd" />
    </IconBase>
  ))
);

CandleBold.displayName = 'CandleBold';

// Triple export pattern
export { CandleBold, CandleBold as CandleBoldIcon, CandleBold as SiCandleBold };
export default CandleBold;
export type { CandleBoldProps };
