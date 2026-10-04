import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CakeRegularProps = Omit<IconBaseProps, 'children'>;

const CakeRegular = memo(
  forwardRef<SVGSVGElement, CakeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.45 1.4h.01l.02.02.08.06a8 8 0 0 1 1 .96c.52.58 1.19 1.51 1.19 2.56 0 1.26-.85 2.32-2 2.64v1.11H19a2.75 2.75 0 0 1 2.75 2.75V13c0 .98-.38 1.88-1 2.55v1.75q0 .82-.03 1.37-.03.57-.27 1.08-.4.8-1.2 1.2-.51.24-1.08.27-.55.04-1.37.03H7.2q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37v-1.75c-.62-.67-1-1.57-1-2.55v-1.5A2.75 2.75 0 0 1 5 8.75h6.25v-1.1a2.75 2.75 0 0 1-2-2.65c0-1.05.67-1.98 1.19-2.56a9 9 0 0 1 1-.96l.08-.06.02-.01.01-.01.45-.34zM15 15.25a3.74 3.74 0 0 1-6 0 3.7 3.7 0 0 1-4.25 1.29v.76q0 .84.02 1.25c.03.29.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02h9.6q.84 0 1.25-.02c.29-.03.43-.07.52-.12q.35-.18.54-.54c.05-.1.1-.23.12-.52s.02-.68.02-1.25v-.76A3.7 3.7 0 0 1 15 15.25m-10-5c-.69 0-1.25.56-1.25 1.25V13a2.25 2.25 0 0 0 4.5 0 .75.75 0 0 1 1.5 0 2.25 2.25 0 0 0 4.5 0 .75.75 0 0 1 1.5 0 2.25 2.25 0 0 0 4.5 0v-1.5c0-.69-.56-1.25-1.25-1.25zm7-7.26q-.21.2-.44.45c-.48.54-.81 1.1-.81 1.56a1.25 1.25 0 0 0 2.5 0c0-.45-.33-1.02-.81-1.56q-.23-.25-.44-.45" clipRule="evenodd" />
    </IconBase>
  ))
);

CakeRegular.displayName = 'CakeRegular';

// Triple export pattern (lucide-react style)
export { CakeRegular, CakeRegular as CakeRegularIcon, CakeRegular as SiCakeRegular };
export default CakeRegular;
export type { CakeRegularProps };
