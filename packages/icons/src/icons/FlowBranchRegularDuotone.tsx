import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowBranchRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowBranchRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowBranchRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.97 13.97c.3-.3.77-.3 1.06 0l5.22 5.22v1.06h-1.06l-5.22-5.22c-.3-.3-.3-.77 0-1.06M20.25 3.75v1.06l-5.96 5.96c-1.27 1.27-2.99 1.98-4.78 1.98H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.51c1.4 0 2.73-.55 3.72-1.54l5.96-5.96z" opacity={0.4} />
        <path d="M21 15.25c.41 0 .75.34.75.75v5c0 .41-.34.75-.75.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.25V16c0-.41.34-.75.75-.75M21 2.25c.41 0 .75.34.75.75v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3.75H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

FlowBranchRegularDuotone.displayName = 'FlowBranchRegularDuotone';

// Triple export pattern
export { FlowBranchRegularDuotone, FlowBranchRegularDuotone as FlowBranchRegularDuotoneIcon, FlowBranchRegularDuotone as SiFlowBranchRegularDuotone };
export default FlowBranchRegularDuotone;
export type { FlowBranchRegularDuotoneProps };
