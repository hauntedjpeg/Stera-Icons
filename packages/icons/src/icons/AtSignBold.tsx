import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtSignBoldProps = Omit<IconBaseProps, 'children'>;

const AtSignBold = memo(
  forwardRef<SVGSVGElement, AtSignBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10q0 .5-.05 1c-.26 2.6-1.9 4.27-3.84 4.26-1.27 0-2.35-.72-2.96-1.9-.82.77-1.93 1.24-3.15 1.24-2.54 0-4.6-2.06-4.6-4.6S9.46 7.4 12 7.4c.97 0 1.87.3 2.62.82.08-.47.49-.82.98-.82.55 0 1 .45 1 1v4.5c0 1.85.94 2.36 1.52 2.36.62 0 1.65-.56 1.84-2.46q.04-.4.04-.8c0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8c1.46 0 2.82-.39 4-1.07.48-.28 1.09-.11 1.37.36.27.48.1 1.1-.37 1.37-1.47.85-3.18 1.34-5 1.34-5.52 0-10-4.48-10-10S6.48 2 12 2m0 7.4c-1.44 0-2.6 1.16-2.6 2.6s1.16 2.6 2.6 2.6 2.6-1.16 2.6-2.6-1.16-2.6-2.6-2.6" clipRule="evenodd" />
    </IconBase>
  ))
);

AtSignBold.displayName = 'AtSignBold';

// Triple export pattern
export { AtSignBold, AtSignBold as AtSignBoldIcon, AtSignBold as SiAtSignBold };
export default AtSignBold;
export type { AtSignBoldProps };
