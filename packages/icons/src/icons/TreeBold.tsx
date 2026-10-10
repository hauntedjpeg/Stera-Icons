import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TreeBoldProps = Omit<IconBaseProps, 'children'>;

const TreeBold = memo(
  forwardRef<SVGSVGElement, TreeBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c.3 0 .6.14.79.39l3.89 5c.23.3.27.7.1 1.05-.16.34-.5.56-.9.56h-.28l2.63 3.39c.24.3.28.7.11 1.05-.16.34-.51.56-.9.56h-.28l2 2.58c.77.98.07 2.42-1.18 2.42H13v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H6.02c-1.25 0-1.95-1.44-1.18-2.42l2-2.58h-.28c-.39 0-.73-.22-.9-.56s-.13-.75.1-1.05L8.4 9H8.1c-.38 0-.73-.22-.9-.56-.16-.34-.12-.75.11-1.05l3.9-5 .07-.09q.29-.3.71-.3m-1.84 5h.28c.39 0 .74.22.9.56s.13.75-.1 1.05L8.6 12h.29c.38 0 .73.22.9.56.16.34.12.75-.11 1.05L7.05 17h9.9l-2.63-3.39c-.23-.3-.27-.7-.1-1.05.16-.34.51-.56.9-.56h.28l-2.63-3.39c-.24-.3-.28-.7-.11-1.05.17-.34.51-.56.9-.56h.28L12 4.63z" clipRule="evenodd" />
    </IconBase>
  ))
);

TreeBold.displayName = 'TreeBold';

// Triple export pattern
export { TreeBold, TreeBold as TreeBoldIcon, TreeBold as SiTreeBold };
export default TreeBold;
export type { TreeBoldProps };
