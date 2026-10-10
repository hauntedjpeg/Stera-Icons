import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandWaveFillProps = Omit<IconBaseProps, 'children'>;

const HandWaveFill = memo(
  forwardRef<SVGSVGElement, HandWaveFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.72 15.3c.39-.15.82.04.98.42.25.64 1.16 2.25 2.4 3.18.33.25.4.72.15 1.05s-.72.4-1.05.15c-1.53-1.15-2.58-3.03-2.9-3.82-.15-.39.04-.82.42-.98M10.43 4.68c.52-.3 1.2-.12 1.5.4l3.15 5.43c-.25.2-.55.51-.81.9-.28.42-.51.95-.56 1.6q-.08.96.55 2.08c.17.3.55.4.85.22.3-.17.4-.55.23-.85-.32-.55-.4-1.01-.38-1.38q.05-.56.35-.98c.18-.28.41-.5.6-.66l.23-.17.06-.04h.01c.2-.11.31-.32.32-.54l.02-2.77c0-.35.16-.65.4-.85q.3-.23.7-.24c.6 0 1.1.49 1.1 1.08v.1l.43 2.83.03.12c1.05 2.8-.05 6.02-2.73 7.56-3 1.72-6.82.7-8.54-2.28l-3-5.18c-.3-.52-.13-1.18.39-1.48.5-.28 1.11-.14 1.44.3l.06.1 1.63 2.81c.17.3.56.4.85.23.3-.17.4-.56.23-.86L6.62 7.13c-.3-.52-.12-1.18.4-1.48s1.2-.12 1.5.4l2.47 4.26c.18.3.56.4.86.23s.4-.56.22-.85l-2.04-3.53c-.3-.52-.13-1.18.4-1.48M18.17 3.49c1.13 0 2.07.56 2.72 1.27.63.7 1.06 1.63 1.06 2.5 0 .41-.34.75-.75.75-.42 0-.76-.34-.76-.75 0-.42-.22-1-.66-1.5-.44-.47-1-.77-1.6-.77-.42 0-.76-.34-.76-.75 0-.42.34-.75.75-.75" />
    </IconBase>
  ))
);

HandWaveFill.displayName = 'HandWaveFill';

// Triple export pattern
export { HandWaveFill, HandWaveFill as HandWaveFillIcon, HandWaveFill as SiHandWaveFill };
export default HandWaveFill;
export type { HandWaveFillProps };
