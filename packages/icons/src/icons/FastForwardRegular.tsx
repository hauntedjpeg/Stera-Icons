import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FastForwardRegularProps = Omit<IconBaseProps, 'children'>;

const FastForwardRegular = memo(
  forwardRef<SVGSVGElement, FastForwardRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.72 6.02c.32 0 .6.11.85.23q.4.2.99.56L20.85 10q.55.31.92.58c.2.15.43.34.58.61l.06.12.06.17c.13.4.11.84-.06 1.23-.14.33-.4.56-.64.73q-.37.27-.92.58l-5.3 3.18q-.57.36-.98.56c-.28.13-.61.26-.98.23-.5-.05-.95-.3-1.25-.71-.22-.3-.28-.65-.31-.95q-.04-.47-.03-1.15v-2.73q-.03.14-.09.26c-.14.33-.4.56-.64.73q-.37.27-.92.58l-5.3 3.18q-.56.36-.98.56c-.28.13-.61.26-.98.23-.5-.05-.95-.3-1.25-.71-.22-.3-.28-.65-.31-.95q-.04-.47-.03-1.15V8.83q0-.68.03-1.15c.03-.3.09-.65.31-.95l.12-.14c.29-.32.7-.53 1.13-.57h.13c.32 0 .6.11.85.23q.4.2.99.56L10.35 10q.55.31.92.58c.2.15.43.34.58.61l.06.12.06.17.03.1V8.83q0-.68.03-1.15c.03-.3.09-.65.31-.95l.12-.14c.29-.32.7-.53 1.13-.57zm-10.5 1.5q-.1 0-.16.09-.02.02-.04.21-.03.31-.02 1v6.35q0 .7.02 1 .02.2.04.22.07.07.15.09.03 0 .2-.08.28-.14.88-.5l5.29-3.17q.57-.34.8-.5l.16-.14q.03-.09 0-.18 0-.03-.16-.13c-.17-.13-.41-.27-.8-.5L4.28 8.1q-.58-.36-.86-.5zm10.5 0q-.1 0-.16.09-.02.02-.04.21-.02.31-.02 1v6.35q0 .7.02 1 .02.2.04.22.07.07.15.09.02 0 .2-.08.28-.14.88-.5l5.29-3.17q.56-.34.8-.5l.16-.14q.03-.09 0-.18 0-.03-.16-.13c-.17-.13-.41-.27-.8-.5l-5.3-3.18c-.4-.25-.66-.4-.87-.5q-.18-.08-.2-.08" clipRule="evenodd" />
    </IconBase>
  ))
);

FastForwardRegular.displayName = 'FastForwardRegular';

// Triple export pattern
export { FastForwardRegular, FastForwardRegular as FastForwardRegularIcon, FastForwardRegular as SiFastForwardRegular };
export default FastForwardRegular;
export type { FastForwardRegularProps };
