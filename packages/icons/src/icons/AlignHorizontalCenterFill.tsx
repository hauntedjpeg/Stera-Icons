import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignHorizontalCenterFillProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalCenterFill = memo(
  forwardRef<SVGSVGElement, AlignHorizontalCenterFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="align-horizontal-center-fill" {...props}>
      <path d="M12 2.13c.48 0 .88.39.88.87v2.5H18q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88 0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02h-5.12v2H15q.51 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88 0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.37.02-.88.02h-2.12V21a.87.87 0 1 1-1.76 0v-2.5H9q-.52 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88 0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2Q8.48 13 9 13h2.13v-2H6q-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.36-.02-.88 0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02h5.13V3c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

AlignHorizontalCenterFill.displayName = 'AlignHorizontalCenterFill';

// Triple export pattern (lucide-react style)
export { AlignHorizontalCenterFill, AlignHorizontalCenterFill as AlignHorizontalCenterFillIcon, AlignHorizontalCenterFill as SiAlignHorizontalCenterFill };
export default AlignHorizontalCenterFill;
export type { AlignHorizontalCenterFillProps };
