import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TreeDeciduousBoldProps = Omit<IconBaseProps, 'children'>;

const TreeDeciduousBold = memo(
  forwardRef<SVGSVGElement, TreeDeciduousBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c1.67 0 3.07 1.13 3.5 2.67 2.04.22 3.63 1.96 3.63 4.07q-.02 1.29-.7 2.29c.96.83 1.57 2.06 1.57 3.44 0 2.5-2 4.53-4.5 4.53H13v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H8.5C6 19 4 16.96 4 14.47c0-1.38.61-2.61 1.58-3.44q-.69-1-.7-2.3c0-2.1 1.58-3.84 3.63-4.06C8.93 3.13 10.33 2 12 2m0 2c-.89 0-1.62.73-1.62 1.65v.02q-.01.46-.35.76t-.8.24q-.15-.02-.3-.02c-1.12 0-2.05.92-2.05 2.09 0 .69.33 1.3.84 1.68.29.21.44.56.4.92-.04.35-.27.66-.6.8-.9.39-1.52 1.28-1.52 2.33C6 15.87 7.13 17 8.5 17h7c1.37 0 2.5-1.12 2.5-2.53 0-1.05-.63-1.94-1.52-2.33-.33-.14-.56-.45-.6-.8s.11-.7.4-.92c.51-.38.84-1 .84-1.68 0-1.17-.93-2.1-2.06-2.1l-.3.03q-.44.05-.8-.24c-.21-.19-.34-.47-.34-.76v-.19C13.53 4.64 12.83 4 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

TreeDeciduousBold.displayName = 'TreeDeciduousBold';

// Triple export pattern
export { TreeDeciduousBold, TreeDeciduousBold as TreeDeciduousBoldIcon, TreeDeciduousBold as SiTreeDeciduousBold };
export default TreeDeciduousBold;
export type { TreeDeciduousBoldProps };
