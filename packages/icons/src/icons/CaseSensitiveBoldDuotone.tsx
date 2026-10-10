import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CaseSensitiveBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CaseSensitiveBoldDuotone = memo(
  forwardRef<SVGSVGElement, CaseSensitiveBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M21 9.5c.55 0 1 .45 1 1v7c0 .55-.45 1-1 1-.46 0-.85-.32-.97-.74-.68.46-1.5.74-2.4.74-2.46 0-4.38-2.05-4.38-4.5s1.92-4.5 4.38-4.5c.9 0 1.72.28 2.4.74.12-.42.5-.74.97-.74m-3.37 2c-1.28 0-2.38 1.08-2.38 2.5s1.1 2.5 2.38 2.5S20 15.42 20 14s-1.1-2.5-2.37-2.5" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M6.15 6.35c.53-1.13 2.17-1.13 2.7 0l.05.12 4.04 10.68c.19.51-.07 1.09-.59 1.29-.51.19-1.1-.07-1.29-.59L10 15H5l-1.07 2.85c-.2.52-.78.78-1.3.59-.51-.2-.77-.78-.58-1.3L6.1 6.48zM5.77 13h3.46L7.5 8.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

CaseSensitiveBoldDuotone.displayName = 'CaseSensitiveBoldDuotone';

// Triple export pattern
export { CaseSensitiveBoldDuotone, CaseSensitiveBoldDuotone as CaseSensitiveBoldDuotoneIcon, CaseSensitiveBoldDuotone as SiCaseSensitiveBoldDuotone };
export default CaseSensitiveBoldDuotone;
export type { CaseSensitiveBoldDuotoneProps };
