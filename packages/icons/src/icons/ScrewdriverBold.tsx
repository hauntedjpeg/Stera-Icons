import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScrewdriverBoldProps = Omit<IconBaseProps, 'children'>;

const ScrewdriverBold = memo(
  forwardRef<SVGSVGElement, ScrewdriverBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.7 5.89c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41l-2.54 2.54c-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41z" />
        <path fillRule="evenodd" d="M14.16 3.35c1.8-1.8 4.7-1.8 6.5 0 1.79 1.79 1.79 4.7 0 6.5l-3.82 3.8q-.3.3-.7.3h-.88L15 15.26q-.07.3-.28.52l-1.7 1.7c-.38.38-1.02.38-1.4 0l-1.84-1.84L3.7 21.7c-.4.39-1.03.39-1.42 0-.39-.4-.39-1.03 0-1.42l6.07-6.07-1.83-1.83c-.4-.4-.4-1.03 0-1.42l1.7-1.7.1-.09q.18-.14.4-.18l1.32-.26v-.87q0-.41.3-.71zm5.08 1.41c-1.01-1.01-2.66-1.01-3.67 0l-3.52 3.52v1.28c0 .48-.34.89-.8.98l-1.83.37-.77.77 3.67 3.67.77-.77.37-1.83.02-.08c.12-.42.51-.72.96-.72h1.28l3.52-3.52c1.01-1.01 1.01-2.66 0-3.67" clipRule="evenodd" />
    </IconBase>
  ))
);

ScrewdriverBold.displayName = 'ScrewdriverBold';

// Triple export pattern
export { ScrewdriverBold, ScrewdriverBold as ScrewdriverBoldIcon, ScrewdriverBold as SiScrewdriverBold };
export default ScrewdriverBold;
export type { ScrewdriverBoldProps };
