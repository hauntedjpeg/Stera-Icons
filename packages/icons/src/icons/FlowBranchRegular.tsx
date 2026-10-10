import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowBranchRegularProps = Omit<IconBaseProps, 'children'>;

const FlowBranchRegular = memo(
  forwardRef<SVGSVGElement, FlowBranchRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.97 13.97c.3-.3.77-.3 1.06 0l5.22 5.22V16c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.19l-5.22-5.22c-.3-.3-.3-.77 0-1.06M21 2.25c.41 0 .75.34.75.75v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.81l-5.96 5.96c-1.27 1.27-2.99 1.98-4.78 1.98H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.51c1.4 0 2.73-.55 3.72-1.54l5.96-5.96H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

FlowBranchRegular.displayName = 'FlowBranchRegular';

// Triple export pattern
export { FlowBranchRegular, FlowBranchRegular as FlowBranchRegularIcon, FlowBranchRegular as SiFlowBranchRegular };
export default FlowBranchRegular;
export type { FlowBranchRegularProps };
