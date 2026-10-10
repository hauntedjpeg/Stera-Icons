import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CameraPlusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CameraPlusRegularDuotone = memo(
  forwardRef<SVGSVGElement, CameraPlusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.74 4.25q.44-.01.81.1.43.13.77.4c.28.22.48.52.71.87l.7 1.03q.06.09.1.12l.01.02q.07.08.15.08h.18c.73 0 1.22 0 1.64.1 1.42.3 2.54 1.42 2.85 2.85.1.42.09.9.09 1.63v2.75q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H7.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03v-2.75c0-.73 0-1.21.09-1.63.31-1.43 1.43-2.54 2.85-2.86.42-.09.9-.08 1.64-.08H7q.08-.01.15-.09l.02-.02.08-.12.7-1.03c.24-.35.44-.65.72-.87q.34-.28.77-.4.37-.11.81-.1zm-3.18 1.5c-.5 0-.6 0-.68.03q-.15.04-.26.14c-.07.05-.13.13-.42.55L8.5 7.5q-.1.15-.23.3-.43.46-1.06.56-.2.03-.38.02c-.81 0-1.1 0-1.31.05-.86.19-1.53.86-1.72 1.71-.05.22-.05.5-.05 1.31v2.75c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.34.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h8.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-2.75c0-.8 0-1.09-.05-1.3-.2-.86-.86-1.53-1.72-1.72-.22-.05-.5-.05-1.3-.05q-.2 0-.39-.02c-.4-.06-.78-.25-1.06-.56q-.13-.15-.23-.3l-.7-1.03c-.3-.42-.35-.5-.42-.55q-.1-.1-.26-.14c-.08-.02-.18-.03-.68-.03z" clipRule="evenodd" opacity={.4} />
        <path d="M12 8.75c.41 0 .75.34.75.75v2.25H15c.41 0 .75.34.75.75s-.34.75-.75.75h-2.25v2.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.25H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25V9.5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CameraPlusRegularDuotone.displayName = 'CameraPlusRegularDuotone';

// Triple export pattern
export { CameraPlusRegularDuotone, CameraPlusRegularDuotone as CameraPlusRegularDuotoneIcon, CameraPlusRegularDuotone as SiCameraPlusRegularDuotone };
export default CameraPlusRegularDuotone;
export type { CameraPlusRegularDuotoneProps };
