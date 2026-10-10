import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NodeMapRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const NodeMapRegularDuotone = memo(
  forwardRef<SVGSVGElement, NodeMapRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.25 15.25c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5M18.25 14.25c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5M12 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5M19.25 6.75c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5M7.25 2.25c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" opacity={0.4} />
        <path d="M9.27 13.24q.33.7.94 1.16l-3.23 2.61q-.33-.7-.94-1.17zM16.51 14.8q-.62.46-.97 1.16l-1.8-1.52q.62-.45.96-1.15zM16.25 9.9q.05.78.45 1.43l-1.7.52q-.06-.78-.45-1.43zM10.94 9.2q-.73.27-1.23.86l-1.4-2q.73-.29 1.22-.87z" />
    </IconBase>
  ))
);

NodeMapRegularDuotone.displayName = 'NodeMapRegularDuotone';

// Triple export pattern
export { NodeMapRegularDuotone, NodeMapRegularDuotone as NodeMapRegularDuotoneIcon, NodeMapRegularDuotone as SiNodeMapRegularDuotone };
export default NodeMapRegularDuotone;
export type { NodeMapRegularDuotoneProps };
