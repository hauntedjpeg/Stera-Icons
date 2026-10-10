import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TreeDeciduousRegularProps = Omit<IconBaseProps, 'children'>;

const TreeDeciduousRegular = memo(
  forwardRef<SVGSVGElement, TreeDeciduousRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c1.61 0 2.96 1.14 3.3 2.65 2 .12 3.57 1.8 3.57 3.84 0 .88-.3 1.69-.79 2.34 1.02.78 1.67 2 1.67 3.4 0 2.35-1.9 4.27-4.25 4.27h-2.75V21c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.25H8.5c-2.35 0-4.25-1.92-4.25-4.28 0-1.38.65-2.61 1.67-3.4-.5-.64-.8-1.45-.8-2.33 0-2.04 1.58-3.72 3.59-3.84.33-1.51 1.68-2.65 3.29-2.65m0 1.5c-1.03 0-1.87.84-1.87 1.9v.02q-.01.34-.26.57-.27.23-.6.18l-.33-.02c-1.27 0-2.31 1.04-2.31 2.34 0 .77.37 1.46.94 1.88.22.16.33.42.3.7-.03.26-.2.49-.45.6-.98.42-1.67 1.4-1.67 2.55 0 1.54 1.24 2.78 2.75 2.78h7c1.51 0 2.75-1.24 2.75-2.78 0-1.15-.7-2.13-1.67-2.56-.25-.1-.42-.33-.45-.6s.08-.53.3-.69c.57-.42.95-1.1.95-1.88 0-1.3-1.05-2.34-2.32-2.34q-.17 0-.33.02-.33.04-.6-.18-.25-.22-.26-.57v-.22c-.1-.96-.9-1.7-1.87-1.7" clipRule="evenodd" />
    </IconBase>
  ))
);

TreeDeciduousRegular.displayName = 'TreeDeciduousRegular';

// Triple export pattern
export { TreeDeciduousRegular, TreeDeciduousRegular as TreeDeciduousRegularIcon, TreeDeciduousRegular as SiTreeDeciduousRegular };
export default TreeDeciduousRegular;
export type { TreeDeciduousRegularProps };
