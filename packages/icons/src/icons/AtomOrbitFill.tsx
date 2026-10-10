import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtomOrbitFillProps = Omit<IconBaseProps, 'children'>;

const AtomOrbitFill = memo(
  forwardRef<SVGSVGElement, AtomOrbitFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.18 18.94c.3-.46.93-.58 1.39-.28 2.45 1.63 5.71 1.84 8.43.27q.21-.13.46-.14l.04-.02c.4-.27.95-.16 1.21.24.27.4.16.95-.24 1.22l-.1.06q-.13.23-.37.37c-3.4 1.96-7.48 1.7-10.54-.33-.46-.3-.58-.93-.28-1.39M3.46 15.2c.71-.41 1.63-.17 2.05.55s.16 1.63-.55 2.05-1.64.17-2.05-.55c-.42-.72-.17-1.64.55-2.05M18.5 15.75c.4-.72 1.33-.96 2.04-.55.72.41.97 1.33.55 2.05s-1.33.96-2.05.55-.96-1.33-.55-2.05M12 7.63c2.42 0 4.37 1.95 4.37 4.37s-1.95 4.37-4.37 4.38S7.62 14.42 7.62 12 9.58 7.63 12 7.63M7.61 3.15c.43-.21.96-.04 1.17.4.22.43.04.95-.4 1.17l-.04.02q-.12.2-.34.33c-2.72 1.57-4.17 4.5-3.99 7.44.04.55-.38 1.02-.93 1.06-.55.03-1.03-.39-1.06-.94C1.79 8.96 3.6 5.3 7 3.34q.24-.14.5-.13zM15.22 3.55c.21-.44.74-.61 1.17-.4q.64.33 1.23.73c1.1.77 2.02 1.73 2.7 2.8l.04.06.13.21.05.1.08.14q.88 1.55 1.15 3.38l.05.36q.09.84.04 1.7c-.03.47-.45.84-.93.81s-.85-.44-.82-.93l.01-.5V12q0-.54-.07-1.07-.18-1.42-.85-2.7-.88-1.66-2.4-2.79-.35-.25-.74-.48l-.02-.01-.43-.23c-.43-.22-.6-.74-.4-1.17M12 1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

AtomOrbitFill.displayName = 'AtomOrbitFill';

// Triple export pattern
export { AtomOrbitFill, AtomOrbitFill as AtomOrbitFillIcon, AtomOrbitFill as SiAtomOrbitFill };
export default AtomOrbitFill;
export type { AtomOrbitFillProps };
