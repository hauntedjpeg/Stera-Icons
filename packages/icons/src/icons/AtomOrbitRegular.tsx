import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtomOrbitRegularProps = Omit<IconBaseProps, 'children'>;

const AtomOrbitRegular = memo(
  forwardRef<SVGSVGElement, AtomOrbitRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.57 18.87c.34-.23.81-.13 1.04.21.23.35.13.81-.21 1.04q-.65.43-1.36.75-1.62.74-3.31.85h-.02l-.6.03h-.22l-.6-.03h-.02Q9.6 21.6 8 20.9q-.74-.33-1.4-.78c-.35-.23-.45-.7-.22-1.04s.7-.44 1.04-.2l.43.26h.01q.38.21.75.38c1.09.5 2.28.74 3.49.73 1.1-.02 2.2-.25 3.21-.7q.4-.18.8-.4l.02-.01zM3.46 15.2c.71-.41 1.63-.17 2.05.55s.16 1.63-.55 2.05-1.64.17-2.05-.55c-.42-.72-.17-1.64.55-2.05M18.5 15.75c.4-.72 1.33-.96 2.04-.55.72.41.97 1.33.55 2.05s-1.33.96-2.05.55-.96-1.33-.55-2.05" />
        <path fillRule="evenodd" d="M12 7.75c2.35 0 4.25 1.9 4.25 4.25s-1.9 4.25-4.25 4.25-4.25-1.9-4.25-4.25S9.65 7.75 12 7.75m0 1.5c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75S13.52 9.25 12 9.25" clipRule="evenodd" />
        <path d="M7.67 3.26c.37-.18.82-.03 1 .34s.03.82-.34 1l-.45.25q-.4.24-.76.5C6.1 6.1 5.25 7.08 4.67 8.22Q4 9.5 3.82 10.95q-.07.52-.07 1.05l.01.52c.03.41-.28.77-.7.8-.41.02-.77-.3-.8-.7q-.04-1.02.09-2 .21-1.5.85-2.81 0-.04.03-.07l.26-.5.06-.11.1-.17.09-.14.05-.08q1-1.56 2.56-2.69.63-.45 1.32-.79M15.33 3.6c.18-.37.63-.52 1-.34q.7.35 1.34.81c1.13.8 2.04 1.81 2.71 2.95l.07.1.05.1q.88 1.56 1.15 3.4.15.98.08 2c-.02.4-.38.72-.8.7-.4-.03-.72-.39-.7-.8q.02-.25.02-.51V12q0-.4-.04-.79-.15-1.6-.9-3.02c-.58-1.13-1.42-2.1-2.43-2.84q-.36-.26-.76-.5l-.45-.24c-.37-.19-.53-.64-.34-1M12 1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

AtomOrbitRegular.displayName = 'AtomOrbitRegular';

// Triple export pattern
export { AtomOrbitRegular, AtomOrbitRegular as AtomOrbitRegularIcon, AtomOrbitRegular as SiAtomOrbitRegular };
export default AtomOrbitRegular;
export type { AtomOrbitRegularProps };
