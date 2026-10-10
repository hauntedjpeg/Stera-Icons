import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelAltRegularProps = Omit<IconBaseProps, 'children'>;

const LabelAltRegular = memo(
  forwardRef<SVGSVGElement, LabelAltRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.97 4.25c.89 0 1.72.43 2.24 1.15l3.57 5c.68.96.68 2.24 0 3.2l-3.57 5c-.52.72-1.35 1.15-2.24 1.15H3.94c-1.42 0-2.25-1.6-1.42-2.77l3.04-4.25c.31-.44.31-1.02 0-1.46L2.52 7.02c-.83-1.16 0-2.77 1.42-2.77zM3.94 5.75c-.2 0-.32.23-.2.4l3.04 4.25c.68.96.68 2.24 0 3.2l-3.04 4.25c-.12.17 0 .4.2.4h12.03c.4 0 .78-.2 1.02-.52l3.57-5c.31-.44.31-1.02 0-1.46l-3.57-5c-.24-.33-.62-.52-1.02-.52z" clipRule="evenodd" />
    </IconBase>
  ))
);

LabelAltRegular.displayName = 'LabelAltRegular';

// Triple export pattern
export { LabelAltRegular, LabelAltRegular as LabelAltRegularIcon, LabelAltRegular as SiLabelAltRegular };
export default LabelAltRegular;
export type { LabelAltRegularProps };
