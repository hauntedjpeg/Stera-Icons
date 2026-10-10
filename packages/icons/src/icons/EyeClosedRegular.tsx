import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EyeClosedRegularProps = Omit<IconBaseProps, 'children'>;

const EyeClosedRegular = memo(
  forwardRef<SVGSVGElement, EyeClosedRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.3 8.65c.18-.37.64-.5 1-.31.37.19.51.64.32 1q-.6 1.18-1.5 2.13L22 13.23c.3.28.32.75.04 1.06-.28.3-.76.32-1.06.04l-1.97-1.83q-1.54 1.26-3.52 1.9l.7 2.4c.11.39-.12.8-.51.92-.4.12-.82-.11-.93-.51l-.71-2.45q-1 .19-2.05.19t-2.05-.19l-.7 2.45c-.12.4-.54.63-.94.51s-.62-.53-.5-.93l.68-2.4q-1.96-.63-3.51-1.89l-1.97 1.83c-.3.28-.78.26-1.06-.04s-.26-.78.04-1.06l1.9-1.76q-.9-.96-1.51-2.12c-.2-.37-.05-.82.32-1.01.36-.2.82-.06 1 .31 1.15 2.18 3.29 3.85 5.9 4.5l.03.01h.01q1.13.29 2.36.29 1.22 0 2.36-.28l.05-.02c2.6-.65 4.74-2.32 5.88-4.5" />
    </IconBase>
  ))
);

EyeClosedRegular.displayName = 'EyeClosedRegular';

// Triple export pattern
export { EyeClosedRegular, EyeClosedRegular as EyeClosedRegularIcon, EyeClosedRegular as SiEyeClosedRegular };
export default EyeClosedRegular;
export type { EyeClosedRegularProps };
