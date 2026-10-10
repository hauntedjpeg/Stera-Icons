import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurveEaseRegularProps = Omit<IconBaseProps, 'children'>;

const CurveEaseRegular = memo(
  forwardRef<SVGSVGElement, CurveEaseRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 15.25c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75-2.75-1.23-2.75-2.75 1.23-2.75 2.75-2.75m0 1.5c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25M20 5.25c.41 0 .75.34.75.75s-.34.75-.75.75c-3.69 0-5.82 2.65-7.86 5.67-.98 1.46-1.97 3.03-3.06 4.21-1.11 1.2-2.45 2.12-4.2 2.12l-.1-.01h.07-.7l-.1.01H4c-.41 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h.89c1.15 0 2.12-.59 3.09-1.63 1-1.07 1.88-2.5 2.92-4.04 2-2.98 4.54-6.33 9.1-6.33M4.68 18.72h.03l-.07-.01zm-.24-.12.03.02-.04-.03zm-.17-1.02-.01.02zm.23-.22.04-.02zm.12-.06h-.01l.12-.03z" clipRule="evenodd" />
        <path d="M11.03 17.25c.41 0 .75.34.75.75s-.34.75-.75.75H11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM14 17.25c.41 0 .75.34.75.75s-.34.75-.75.75h-.03c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M5 3.25c1.52 0 2.75 1.23 2.75 2.75S6.52 8.75 5 8.75 2.25 7.52 2.25 6 3.48 3.25 5 3.25m0 1.5c-.69 0-1.25.56-1.25 1.25S4.31 7.25 5 7.25 6.25 6.69 6.25 6 5.69 4.75 5 4.75" clipRule="evenodd" />
        <path d="M10.03 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM13 5.25c.41 0 .75.34.75.75s-.34.75-.75.75h-.03c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

CurveEaseRegular.displayName = 'CurveEaseRegular';

// Triple export pattern
export { CurveEaseRegular, CurveEaseRegular as CurveEaseRegularIcon, CurveEaseRegular as SiCurveEaseRegular };
export default CurveEaseRegular;
export type { CurveEaseRegularProps };
