import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsUpFillProps = Omit<IconBaseProps, 'children'>;

const ChevronsUpFill = memo(
  forwardRef<SVGSVGElement, ChevronsUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 10.75c.33 0 .65.13.88.37l7 7c.5.48.5 1.28 0 1.76-.48.5-1.28.5-1.76 0L12 13.77l-6.12 6.11c-.48.5-1.28.5-1.76 0-.5-.48-.5-1.28 0-1.76l7-7c.23-.24.55-.37.88-.37" />
        <path d="M12 2.75c.33 0 .65.13.88.37l7 7c.5.48.5 1.28 0 1.76-.48.5-1.28.5-1.76 0L12 5.77l-6.12 6.11c-.48.5-1.28.5-1.76 0-.5-.48-.5-1.28 0-1.76l7-7c.23-.24.55-.37.88-.37" />
    </IconBase>
  ))
);

ChevronsUpFill.displayName = 'ChevronsUpFill';

// Triple export pattern
export { ChevronsUpFill, ChevronsUpFill as ChevronsUpFillIcon, ChevronsUpFill as SiChevronsUpFill };
export default ChevronsUpFill;
export type { ChevronsUpFillProps };
