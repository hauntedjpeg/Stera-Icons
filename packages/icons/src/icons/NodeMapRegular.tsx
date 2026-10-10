import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NodeMapRegularProps = Omit<IconBaseProps, 'children'>;

const NodeMapRegular = memo(
  forwardRef<SVGSVGElement, NodeMapRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M7.25 2.25c1.66 0 3 1.34 3 3 0 .74-.27 1.42-.72 1.94l1.41 2q.5-.18 1.06-.19c1.08 0 2.02.57 2.55 1.42l1.7-.53v-.14c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3c-1.08 0-2.02-.57-2.55-1.42l-1.7.53V12q0 .7-.3 1.3l1.8 1.5c.5-.34 1.1-.55 1.75-.55 1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3q0-.7.3-1.3l-1.8-1.5q-.76.53-1.75.55c-.67 0-1.3-.22-1.79-.6l-3.23 2.61q.26.58.27 1.24c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3q1.02.02 1.79.6l3.23-2.61Q9 12.66 9 12c0-.74.27-1.42.71-1.94l-1.4-2q-.5.19-1.06.19c-1.66 0-3-1.34-3-3s1.34-3 3-3m-3 14.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5q-.01-.47-.26-.84l-.07-.1c-.28-.34-.7-.56-1.17-.56m14-1q-.71.01-1.15.54-.34.4-.35.96c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5M12 10.5q-.49 0-.86.27c-.39.28-.64.72-.64 1.23q0 .54.33.94c.28.34.7.56 1.17.56q.71-.01 1.15-.54.34-.4.35-.96 0-.23-.07-.45c-.19-.6-.76-1.05-1.43-1.05m7.25-2.25c-.83 0-1.5.67-1.5 1.5q0 .23.07.45c.19.6.76 1.05 1.43 1.05.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5m-12-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5q.49 0 .86-.27c.39-.28.64-.72.64-1.23 0-.83-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

NodeMapRegular.displayName = 'NodeMapRegular';

// Triple export pattern
export { NodeMapRegular, NodeMapRegular as NodeMapRegularIcon, NodeMapRegular as SiNodeMapRegular };
export default NodeMapRegular;
export type { NodeMapRegularProps };
