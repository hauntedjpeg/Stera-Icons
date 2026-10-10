import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToolboxRegularProps = Omit<IconBaseProps, 'children'>;

const ToolboxRegular = memo(
  forwardRef<SVGSVGElement, ToolboxRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.42 2.75c1 0 1.83.73 1.98 1.72l.25 1.78q.93-.01 1.58.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v3.4q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H7.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03v-3.4q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.65-.04 1.58-.04l.25-1.78c.15-.99.99-1.72 1.98-1.72zm2.33 11v.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.75h-6.5v.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.75h-3.5v1.45c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h8.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-1.45zm-8.95-6c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v.45h3.5v-.75c0-.41.34-.75.75-.75s.75.34.75.75v.75h6.5v-.75c0-.41.34-.75.75-.75s.75.34.75.75v.75h3.5v-.45c0-.85 0-1.45-.04-1.9-.04-.46-.1-.72-.2-.92q-.34-.65-.99-.98c-.2-.1-.46-.17-.91-.21-.46-.04-1.06-.04-1.91-.04zm1.78-3.5c-.24 0-.46.18-.5.43l-.22 1.57h6.28l-.23-1.57c-.03-.25-.25-.43-.5-.43z" clipRule="evenodd" />
    </IconBase>
  ))
);

ToolboxRegular.displayName = 'ToolboxRegular';

// Triple export pattern
export { ToolboxRegular, ToolboxRegular as ToolboxRegularIcon, ToolboxRegular as SiToolboxRegular };
export default ToolboxRegular;
export type { ToolboxRegularProps };
