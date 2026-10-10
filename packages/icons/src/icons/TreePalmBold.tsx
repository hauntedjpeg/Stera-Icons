import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TreePalmBoldProps = Omit<IconBaseProps, 'children'>;

const TreePalmBold = memo(
  forwardRef<SVGSVGElement, TreePalmBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.96 2.77c2.29-1.37 5.13-.86 6.8 1.08.19.22.27.52.23.81q-.08.46-.48.7l-3.3 1.98q.42.15.83.4c2.28 1.37 3.25 4.13 2.48 6.56q-.16.46-.6.64-.45.15-.87-.08l-6.06-3.63c.06 2.46-.17 5.72-2.07 10.16-.22.51-.8.75-1.31.53s-.75-.8-.53-1.31c1.77-4.13 1.97-7.03 1.9-9.36l-6.03 3.6c-.26.17-.58.2-.87.09q-.44-.18-.6-.64c-.77-2.43.2-5.2 2.48-6.55q.4-.25.83-.41L3.5 5.36q-.4-.24-.48-.7c-.04-.29.04-.59.23-.81 1.67-1.94 4.51-2.45 6.8-1.08.84.5 1.5 1.2 1.96 1.98.46-.79 1.12-1.48 1.96-1.98M9.87 9.18c-.9-.34-1.96-.27-2.88.28-1.06.63-1.68 1.74-1.76 2.9l4.98-2.98zm7.14.28c-.92-.55-1.97-.62-2.88-.28l-.34.2 4.98 2.98c-.08-1.16-.7-2.27-1.76-2.9m-8-4.97c-1.05-.63-2.28-.63-3.27-.11l5.03 3c-.08-1.15-.7-2.26-1.76-2.9m9.25-.11c-1-.52-2.22-.52-3.27.1-1.06.64-1.68 1.75-1.76 2.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

TreePalmBold.displayName = 'TreePalmBold';

// Triple export pattern
export { TreePalmBold, TreePalmBold as TreePalmBoldIcon, TreePalmBold as SiTreePalmBold };
export default TreePalmBold;
export type { TreePalmBoldProps };
