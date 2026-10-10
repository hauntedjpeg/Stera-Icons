import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.12 8.46c.4-.39 1.03-.39 1.42 0 .39.4.39 1.03 0 1.42l-3.95 3.95h3.24c.55 0 1 .45 1 1s-.45 1-1 1H9.17q-.41 0-.7-.3c-.2-.18-.3-.44-.3-.7V9.17c0-.55.45-1 1-1s1 .45 1 1v3.24z" />
        <path fillRule="evenodd" d="M4.93 4.93c3.9-3.9 10.24-3.9 14.14 0s3.9 10.24 0 14.14-10.24 3.9-14.14 0-3.9-10.24 0-14.14m12.73 1.41c-3.13-3.12-8.2-3.12-11.32 0s-3.12 8.2 0 11.32 8.2 3.12 11.32 0 3.12-8.2 0-11.32" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleDownLeftBold.displayName = 'ArrowCircleDownLeftBold';

// Triple export pattern
export { ArrowCircleDownLeftBold, ArrowCircleDownLeftBold as ArrowCircleDownLeftBoldIcon, ArrowCircleDownLeftBold as SiArrowCircleDownLeftBold };
export default ArrowCircleDownLeftBold;
export type { ArrowCircleDownLeftBoldProps };
