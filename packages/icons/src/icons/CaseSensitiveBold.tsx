import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CaseSensitiveBoldProps = Omit<IconBaseProps, 'children'>;

const CaseSensitiveBold = memo(
  forwardRef<SVGSVGElement, CaseSensitiveBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.15 6.35c.53-1.13 2.17-1.13 2.7 0l.05.12 4.04 10.68c.19.51-.07 1.09-.59 1.29-.51.19-1.1-.07-1.29-.59L10 15H5l-1.07 2.85c-.2.52-.78.78-1.3.59-.51-.2-.77-.78-.58-1.3L6.1 6.48zM5.77 13h3.46L7.5 8.41zM21 9.5c.55 0 1 .45 1 1v7c0 .55-.45 1-1 1-.46 0-.85-.32-.97-.74-.68.46-1.5.74-2.4.74-2.46 0-4.38-2.05-4.38-4.5s1.92-4.5 4.37-4.5c.9 0 1.73.28 2.41.74.12-.42.5-.74.97-.74m-3.38 2c-1.27 0-2.37 1.08-2.37 2.5 0 1.41 1.1 2.5 2.37 2.5C18.9 16.5 20 15.42 20 14s-1.1-2.5-2.38-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CaseSensitiveBold.displayName = 'CaseSensitiveBold';

// Triple export pattern
export { CaseSensitiveBold, CaseSensitiveBold as CaseSensitiveBoldIcon, CaseSensitiveBold as SiCaseSensitiveBold };
export default CaseSensitiveBold;
export type { CaseSensitiveBoldProps };
